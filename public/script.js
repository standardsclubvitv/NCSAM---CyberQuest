// Quiz Questions
const questions = [
    {
        id: 1,
        question: "According to the latest bi-annual report by Acronis (H1 2025), which country emerged as the most-targeted globally for malware attacks, with approximately 12.4% of monitored endpoints affected?",
        options: [
            "United States",
            "India",
            "Brazil",
            "China"
        ],
        correctAnswer: 1
    },
    {
        id: 2,
        question: "In that same Acronis report, what percentage of attacks on Managed Service Providers (MSPs) were due to phishing in H1 2025?",
        options: [
            "30%",
            "40%",
            "52%",
            "65%"
        ],
        correctAnswer: 2
    },
    {
        id: 3,
        question: "The Acronis report noted that phishing incidents in collaboration apps such as Microsoft Teams and Slack increased from 9% to what percentage in the first half of 2025?",
        options: [
            "18%",
            "24%",
            "30.5%",
            "45%"
        ],
        correctAnswer: 2
    },
    {
        id: 4,
        question: "As per official Indian government data, what was the total amount lost to cyber fraud in India in 2024?",
        options: [
            "₹ 7,465 crore",
            "₹ 15,000 crore",
            "₹ 22,845 crore",
            "₹ 30,000 crore"
        ],
        correctAnswer: 2
    },
    {
        id: 5,
        question: "Which of the following industries was highlighted by the Acronis H1 2025 report as being most-targeted by ransomware attacks globally in Q1 2025?",
        options: [
            "Retail and e-commerce",
            "Manufacturing",
            "Healthcare",
            "Education"
        ],
        correctAnswer: 1
    },
    {
        id: 6,
        question: "The number of cybercrime complaints in India rose to how many in 2024, according to the Ministry of Home Affairs?",
        options: [
            "10 lakh",
            "15 lakh",
            "19 lakh",
            "25 lakh"
        ],
        correctAnswer: 2
    },
    {
        id: 7,
        question: "In the context of AI-powered cyber-threats, which of the following tactics was noted by Acronis as increasing significantly in H1 2025?",
        options: [
            "Remote Desktop Protocol attacks",
            "Use of AI-generated deepfakes and social-engineering",
            "Traditional ransomware via USB drives",
            "Old style phishing (unchanged)"
        ],
        correctAnswer: 1
    },
    {
        id: 8,
        question: "What portion of global 'monitored endpoints' did India account for in the Acronis study?",
        options: [
            "8.4%",
            "10.2%",
            "12.4%",
            "14.6%"
        ],
        correctAnswer: 2
    },
    {
        id: 9,
        question: "According to other government data, cybercrime cases in India have risen from over 4.5 lakh in 2021 to over how many by end of 2024?",
        options: [
            "12 lakh",
            "18 lakh",
            "22.5 lakh",
            "30 lakh"
        ],
        correctAnswer: 2
    },
    {
        id: 10,
        question: "In one major Indian city, the local cyber-fraud helpline '1930' reportedly receives how many calls per day (approx)?",
        options: [
            "500",
            "1,000",
            "2,500-2,700",
            "5,000"
        ],
        correctAnswer: 2
    },
    {
        id: 11,
        question: "Which of the following statements best reflects a finding from the Acronis report?",
        options: [
            "RDP attacks increased from 3% to 24% in H1 2025",
            "Phishing attacks on MSPs rose from 30% to 52%",
            "Malware in collaboration apps increased from 45% to 82%",
            "Deepfakes are no longer used by threat actors"
        ],
        correctAnswer: 1
    },
    {
        id: 12,
        question: "Which of the following was not listed as one of the most active ransomware gangs in the Acronis H1 2025 report?",
        options: [
            "Cl0p",
            "Akira",
            "Qlin",
            "WannaCry"
        ],
        correctAnswer: 3
    },
    {
        id: 13,
        question: "The surge in India's cyber fraud losses in 2024 marked approximately what percentage increase from the previous year?",
        options: [
            "100%",
            "150%",
            "200%",
            "300%"
        ],
        correctAnswer: 2
    },
    {
        id: 14,
        question: "What percentage of all attacks globally in the Acronis report were accounted for by phishing?",
        options: [
            "15%",
            "25%",
            "35%",
            "45%"
        ],
        correctAnswer: 1
    },
    {
        id: 15,
        question: "Which of the following is not explicitly cited in the news sources above as an emerging vector or tactic in 2025 cyber-threats?",
        options: [
            "AI-generated deepfakes",
            "Collaboration-app phishing (Teams/Slack)",
            "RDP browser exploits (Remote Desktop Protocol)",
            "Traditional USB-based malware propagation"
        ],
        correctAnswer: 3
    },
    {
        id: 16,
        question: "The Indian government press note cited that cybersecurity incidents increased from 10.29 lakh in 2022 to how many in 2024?",
        options: [
            "15 lakh",
            "20 lakh",
            "22.68 lakh",
            "25 lakh"
        ],
        correctAnswer: 2
    },
    {
        id: 17,
        question: "In the Acronis report, which one of the below collaboration or communication platforms was specifically highlighted as a growing attack surface?",
        options: [
            "TikTok",
            "Slack",
            "WhatsApp",
            "Zoom"
        ],
        correctAnswer: 1
    },
    {
        id: 18,
        question: "According to an article, India lost nearly how many crore rupees in cyber-fraud in 2024?",
        options: [
            "₹ 15,000 crore",
            "₹ 22,000 crore",
            "₹ 28,000 crore",
            "₹ 30,000 crore"
        ],
        correctAnswer: 1
    },
    {
        id: 19,
        question: "Which of these trends did the Acronis report say decreased sharply for MSPs in H1 2025 (compared to H1 2024)?",
        options: [
            "Unpatched-vulnerability attacks",
            "RDP-based attacks",
            "Phishing attacks",
            "Credential-harvesting attacks"
        ],
        correctAnswer: 1
    },
    {
        id: 20,
        question: "Which of the following statements about India's cybersecurity news profile is correct (based on the sources above)?",
        options: [
            "India has low exposure to AI-powered cyberattacks",
            "India is now reported as the most targeted country globally for malware attacks",
            "India's cyber fraud losses in 2024 were lower than in 2023",
            "Collaboration apps have no role in cyber-threats at present"
        ],
        correctAnswer: 1
    },
    {
        id: 21,
        question: "The Indian government's Digital Personal Data Protection Act (DPDPA) 2023 aligns most closely with which global data-protection framework?",
        options: [
            "HIPAA",
            "GDPR",
            "CCPA",
            "ISO 27001"
        ],
        correctAnswer: 1
    },
    {
        id: 22,
        question: "ISO/IEC 27001:2022 is primarily concerned with which aspect of cybersecurity?",
        options: [
            "Cryptographic algorithm design",
            "Information Security Management Systems (ISMS)",
            "Application security testing",
            "Data privacy in IoT"
        ],
        correctAnswer: 1
    },
    {
        id: 23,
        question: "The NIST Cybersecurity Framework 2.0, released in 2024, introduced which additional core function beyond the previous five?",
        options: [
            "Govern",
            "Audit",
            "Monitor",
            "Patch"
        ],
        correctAnswer: 0
    },
    {
        id: 24,
        question: "The Reserve Bank of India's 2024 cybersecurity circular instructed banks to comply with which of the following standards for incident-response planning?",
        options: [
            "ISO 22301 (Business Continuity)",
            "NIST SP 800-61",
            "ISO 27035",
            "CERT-In Advisory 04/2023"
        ],
        correctAnswer: 2
    },
    {
        id: 25,
        question: "According to recent CERT-In guidelines, all service providers, intermediaries, and government organisations must report cybersecurity incidents within what timeframe?",
        options: [
            "12 hours",
            "24 hours",
            "48 hours",
            "72 hours"
        ],
        correctAnswer: 3
    },
    {
        id: 26,
        question: "The ISO/SAE 21434 standard is relevant to which specific sector?",
        options: [
            "Healthcare systems",
            "Banking and finance",
            "Automotive cybersecurity",
            "Cloud computing"
        ],
        correctAnswer: 2
    },
    {
        id: 27,
        question: "The SOC 2 (Type II) compliance standard mainly evaluates what?",
        options: [
            "Network resilience",
            "Cloud-service provider security controls over time",
            "Cryptographic key lengths",
            "AI model explainability"
        ],
        correctAnswer: 1
    },
    {
        id: 28,
        question: "PCI DSS v4.0, implemented in 2024, governs which kind of systems?",
        options: [
            "Systems handling cardholder payment data",
            "Healthcare records and EMRs",
            "Government data centres",
            "Industrial automation control systems"
        ],
        correctAnswer: 0
    },
    {
        id: 29,
        question: "Under India's 2024 National Cybersecurity Strategy draft, which agency was proposed as the central coordinating body for all national cybersecurity efforts?",
        options: [
            "CERT-In",
            "NCSC (National Cyber Security Coordinator)",
            "DRDO Cyber Division",
            "C-DAC"
        ],
        correctAnswer: 1
    },
    {
        id: 30,
        question: "The Zero Trust model popularized by NIST SP 800-207 operates on which guiding principle?",
        options: [
            "Trust but verify",
            "Perimeter-based defense",
            "Never trust, always verify",
            "Security through obscurity"
        ],
        correctAnswer: 2
    }
];

// DOM Elements
const registrationForm = document.getElementById('registrationForm');
const quizSection = document.getElementById('quiz');
const thanksSection = document.getElementById('thanks');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const timeLeft = document.getElementById('timeLeft');
const quizProgress = document.getElementById('quizProgress');

// Quiz State
let currentQuestion = 0;
let answers = new Array(questions.length).fill(null);
let timer;
let timeRemaining = 3000; // 50 minutes in seconds
let minTimeRequired = 1200; // 20 minutes in seconds
let startTime;

// Form Validation
registrationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const regNo = document.getElementById('regNo').value.toUpperCase();
    const email = document.getElementById('email').value.toLowerCase();

    // Validation
    if (!regNo.match(/^[0-9]{2}[A-Z]{3}[0-9]{4}$/)) {
        showError('regNo', 'Invalid registration number format');
        return;
    }

    if (!email.endsWith('@vitstudent.ac.in')) {
        showError('email', 'Please use your VIT student email');
        return;
    }

    // Start Quiz
    startQuiz();
});

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorSpan = field.nextElementSibling;
    errorSpan.textContent = message;
    field.classList.add('error');
}

function startQuiz() {
    // Hide landing page and registration
    document.getElementById('landing').classList.add('hidden');
    document.getElementById('registration').classList.add('hidden');
    document.querySelector('.hero').classList.add('quiz-mode');
    quizSection.classList.remove('hidden');
    startTime = new Date();
    startTimer();
    showQuestion(0);
}

function startTimer() {
    timer = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            clearInterval(timer);
            submitQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const timePassed = Math.floor((new Date() - startTime) / 1000);
    const canSubmit = timePassed >= minTimeRequired;
    
    timeLeft.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    if (!canSubmit) {
        const remainingMinutes = Math.ceil((minTimeRequired - timePassed) / 60);
        timeLeft.textContent += ` (Must wait ${remainingMinutes} min to submit)`;
    }
}

function showQuestion(index) {
    const question = questions[index];
    questionText.textContent = `${index + 1}. ${question.question}`;
    optionsContainer.innerHTML = '';

    question.options.forEach((option, i) => {
        const button = document.createElement('button');
        button.className = `option ${answers[index] === i ? 'selected' : ''}`;
        button.textContent = option;
        button.onclick = () => selectAnswer(i);
        optionsContainer.appendChild(button);
    });

    updateNavigation();
    updateProgress();
}

function selectAnswer(optionIndex) {
    answers[currentQuestion] = optionIndex;
    showQuestion(currentQuestion);
}

function updateNavigation() {
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.textContent = currentQuestion === questions.length - 1 ? 'Submit' : 'Next';
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    quizProgress.style.width = `${progress}%`;
}

prevBtn.onclick = () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
};

nextBtn.onclick = () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
        submitQuiz();
    }
};

function submitQuiz() {
    const timeTaken = Math.floor((new Date() - startTime) / 1000);
    
    // Check if minimum time requirement is met
    if (timeTaken < minTimeRequired) {
        const remainingMinutes = Math.ceil((minTimeRequired - timeTaken) / 60);
        alert(`You must spend at least 20 minutes on the quiz. Please wait ${remainingMinutes} more minutes.`);
        return;
    }
    
    clearInterval(timer);
    
    // Calculate score
    const score = answers.reduce((total, answer, index) => {
        return total + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);

    // Prepare submission data
    const submissionData = {
        name: document.getElementById('name').value,
        regNo: document.getElementById('regNo').value.toUpperCase(),
        email: document.getElementById('email').value.toLowerCase(),
        answers: answers.map((answer, index) => ({
            questionId: questions[index].id,
            answer: answer !== null ? questions[index].options[answer] : null,
            isCorrect: answer === questions[index].correctAnswer
        })),
        score: score,
        timeTaken: timeTaken
    };

    // Submit to server
    fetch('/api/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(submissionData)
    })
    .then(response => response.json())
    .then(data => {
        showThanks();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while submitting your quiz. Please try again.');
    });
}

function showThanks() {
    quizSection.classList.add('hidden');
    thanksSection.classList.remove('hidden');
}

// Prevent tab switching
document.addEventListener('visibilitychange', function() {
    if (document.hidden && quizSection.classList.contains('hidden') === false) {
        alert('Warning: Switching tabs is not allowed during the quiz!');
    }
});

// Prevent browser back button
window.history.pushState(null, null, window.location.href);
window.addEventListener('popstate', function() {
    window.history.pushState(null, null, window.location.href);
    alert('Navigation is disabled during the quiz');
});

// Add scroll to registration function
document.addEventListener('DOMContentLoaded', function() {
    const startQuizButton = document.querySelector('.btn-start');
    if (startQuizButton) {
        startQuizButton.addEventListener('click', function() {
            document.getElementById('registration').scrollIntoView({behavior: 'smooth'});
        });
    }
});