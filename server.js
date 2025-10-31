require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const path = require('path');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const app = express();
const port = process.env.PORT || 3000;

// Basic auth middleware for admin routes
const adminAuth = (req, res, next) => {
    const auth = req.headers.authorization;
    const expectedAuth = 'Basic ' + Buffer.from(process.env.ADMIN_USER + ':' + process.env.ADMIN_PASS).toString('base64');

    if (!auth || auth !== expectedAuth) {
        res.set('WWW-Authenticate', 'Basic realm="Admin Access"');
        return res.status(401).send('Authentication required');
    }
    next();
};

// MongoDB Connection with Connection Pooling
mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Schema Definition
const studentSubmissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    regNo: {
        type: String,
        required: true,
        uppercase: true,
        match: /^[0-9]{2}[A-Z]{3}[0-9]{4}$/
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        match: /@vitstudent\.ac\.in$/
    },
    answers: [{
        questionId: Number,
        answer: String,
        isCorrect: Boolean
    }],
    score: Number,
    timeTaken: Number,
    submittedAt: {
        type: Date,
        default: Date.now
    },
    ipAddress: String
});

// Create compound index for unique regNo and email
studentSubmissionSchema.index({ regNo: 1, email: 1 }, { unique: true });

const StudentSubmission = mongoose.model('StudentSubmission', studentSubmissionSchema);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());

// Custom Helmet configuration with CSP
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            imgSrc: ["'self'", "data:", "https://fonts.gstatic.com"],
            fontSrc: ["'self'", "https://fonts.googleapis.com", "https://fonts.gstatic.com"],
            connectSrc: ["'self'"],
            frameSrc: ["'self'"]
        }
    }
}));

// Rate Limiting - 100 requests per 15 minutes
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests from this IP, please try again after 15 minutes'
});
app.use(limiter);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Validation middleware
const validateSubmission = [
    body('name').trim().isLength({ min: 2 }).escape(),
    body('regNo').matches(/^[0-9]{2}[A-Z]{3}[0-9]{4}$/),
    body('email').matches(/@vitstudent\.ac\.in$/),
    body('answers').isArray(),
    body('timeTaken').isNumeric()
];

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/api/submit', validateSubmission, async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, regNo, email, answers, timeTaken } = req.body;
        const ipAddress = req.ip;

        // Check for existing submission
        const existingSubmission = await StudentSubmission.findOne({ regNo });
        if (existingSubmission) {
            return res.status(400).json({ error: 'You have already submitted the quiz' });
        }

        // Calculate score
        const score = answers.filter(answer => answer.isCorrect).length;

        // Create submission
        const submission = new StudentSubmission({
            name,
            regNo,
            email,
            answers,
            score,
            timeTaken,
            ipAddress
        });

        await submission.save();
        res.status(201).json({
            message: 'Quiz submitted successfully',
            score,
            timeTaken
        });
    } catch (error) {
        console.error('Submission error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Admin Routes
app.get('/admin', adminAuth, async (req, res) => {
    try {
        const submissions = await StudentSubmission.find().sort('-submittedAt');
        const totalSubmissions = submissions.length;
        const totalScore = submissions.reduce((sum, sub) => sum + sub.score, 0);
        const averageScore = totalSubmissions > 0 ? totalScore / totalSubmissions : 0;
        const highestScore = submissions.reduce((max, sub) => Math.max(max, sub.score), 0);

        res.render('admin', {
            submissions,
            totalSubmissions,
            averageScore,
            highestScore
        });
    } catch (error) {
        console.error('Admin page error:', error);
        res.status(500).send('Error loading admin page');
    }
});

app.get('/admin/download-csv', adminAuth, async (req, res) => {
    try {
        const submissions = await StudentSubmission.find().sort('-submittedAt');
        
        const csvWriter = createCsvWriter({
            path: 'submissions.csv',
            header: [
                {id: 'name', title: 'Name'},
                {id: 'regNo', title: 'Registration Number'},
                {id: 'email', title: 'Email'},
                {id: 'score', title: 'Score'},
                {id: 'timeTaken', title: 'Time Taken (seconds)'},
                {id: 'submittedAt', title: 'Submitted At'},
                {id: 'answers', title: 'Answers'}
            ]
        });

        const records = submissions.map(sub => ({
            name: sub.name,
            regNo: sub.regNo,
            email: sub.email,
            score: sub.score,
            timeTaken: sub.timeTaken,
            submittedAt: new Date(sub.submittedAt).toLocaleString(),
            answers: JSON.stringify(sub.answers)
        }));

        await csvWriter.writeRecords(records);
        res.download('submissions.csv', 'cyberquest_submissions.csv');
    } catch (error) {
        console.error('CSV download error:', error);
        res.status(500).send('Error generating CSV');
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Set trust proxy for Vercel
app.set('trust proxy', 1);

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
