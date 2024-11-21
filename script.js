function shuffleArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        console.error("Invalid array provided to shuffleArray:", arr);
        return arr;
    }
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const questions = [
    {
        question: "What is the symbol for Hydrogen?",
        answers: [
            { text: "H", correct: true },
            { text: "He", correct: false },
            { text: "N", correct: false },
            { text: "O", correct: false },
        ],
    },
    {
        question: "What is the atomic number of Helium?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "4", correct: false },
        ],
    },
    {
        question: "What is the symbol for Lithium?",
        answers: [
            { text: "Li", correct: true },
            { text: "Be", correct: false },
            { text: "B", correct: false },
            { text: "C", correct: false },
        ],
    },
    { question: "What is the symbol for Sodium?", answers: [
        { text: "Na", correct: true },
        { text: "S", correct: false },
        { text: "So", correct: false },
        { text: "N", correct: false },
        ],
    },
    { question: "What is the atomic number of Carbon?", answers: [
        { text: "6", correct: true },
        { text: "8", correct: false },
        { text: "12", correct: false },
        { text: "14", correct: false },
        ], 
    },
    { question: "What is the symbol for Potassium?", answers: [
        { text: "K", correct: true },
        { text: "P", correct: false },
        { text: "Pt", correct: false },
        { text: "Po", correct: false },
        ], 
    },
    { question: "What is the atomic number of Oxygen?", answers: [
        { text: "8", correct: true },
        { text: "6", correct: false },
        { text: "10", correct: false },
        { text: "12", correct: false },
        ], 
    },
    { question: "What is the symbol for Gold?", answers: [
        { text: "Au", correct: true },
        { text: "Ag", correct: false },
        { text: "Gd", correct: false },
        { text: "Go", correct: false },
        ], 
    },
    { question: "What is the atomic number of Fluorine?", answers: [
        { text: "9", correct: true },
        { text: "7", correct: false },
        { text: "8", correct: false },
        { text: "10", correct: false },
        ], 
    },
    { question: "What is the symbol for Magnesium?", answers: [
        { text: "Mg", correct: true },
        { text: "Mn", correct: false },
        { text: "Ma", correct: false },
        { text: "M", correct: false },
        ], 
    },
    { question: "What is the atomic number of Iron?", answers: [
        { text: "26", correct: true },
        { text: "28", correct: false },
        { text: "24", correct: false },
        { text: "30", correct: false },
        ], 
    },
    { question: "What is the symbol for Aluminum?", answers: [
        { text: "Al", correct: true },
        { text: "Am", correct: false },
        { text: "Au", correct: false },
        { text: "Ag", correct: false },
        ], 
    },
    { question: "What is the atomic number of Chlorine?", answers: [
        { text: "17", correct: true },
        { text: "15", correct: false },
        { text: "19", correct: false },
        { text: "21", correct: false },
        ], 
    },
    { question: "What is the symbol for Calcium?", answers: [
        { text: "Ca", correct: true },
        { text: "Ce", correct: false },
        { text: "Cl", correct: false },
        { text: "C", correct: false },
        ], 
    },
    { question: "What is the atomic number of Zinc?", answers: [
        { text: "30", correct: true },
        { text: "28", correct: false },
        { text: "32", correct: false },
        { text: "34", correct: false },
        ],  
    },
    { question: "What is the symbol for Silver?", answers: [
        { text: "Ag", correct: true },
        { text: "Au", correct: false },
        { text: "Si", correct: false },
        { text: "Sl", correct: false },
        ], 
    },
    { question: "What is the atomic number of Neon?", answers: [
        { text: "10", correct: true },
        { text: "12", correct: false },
        { text: "8", correct: false },
        { text: "14", correct: false },
        ], 
    },
    { question: "What is the symbol for Phosphorus?", answers: [
        { text: "P", correct: true },
        { text: "Ph", correct: false },
        { text: "Po", correct: false },
        { text: "Pa", correct: false },
        ], 
    },
    { question: "What is the atomic number of Argon?", answers: [
        { text: "18", correct: true },
        { text: "16", correct: false },
        { text: "20", correct: false },
        { text: "22", correct: false },
        ], 
    },
    { question: "What is the symbol for Mercury?", answers: [
        { text: "Hg", correct: true },
        { text: "Me", correct: false },
        { text: "My", correct: false },
        { text: "Mc", correct: false },
        ], 
    },
    { question: "What is the atomic number of Nitrogen?", answers: [
        { text: "7", correct: true },
        { text: "5", correct: false },
        { text: "9", correct: false },
        { text: "11", correct: false },
        ], 
    },
    { question: "What is the symbol for Lead?", answers: [
        { text: "Pb", correct: true },
        { text: "Ld", correct: false },
        { text: "Le", correct: false },
        { text: "Lp", correct: false },
        ], 
    },
    { question: "What is the atomic number of Silicon?", answers: [
        { text: "14", correct: true },
        { text: "12", correct: false },
        { text: "16", correct: false },
        { text: "18", correct: false },
        ], 
    },
    { question: "What is the symbol for Tin?", answers: [
        { text: "Sn", correct: true },
        { text: "Tn", correct: false },
        { text: "Ti", correct: false },
        { text: "Tr", correct: false },
        ], 
    },
    { question: "What is the atomic number of Sulfur?", answers: [
        { text: "16", correct: true },
        { text: "14", correct: false },
        { text: "18", correct: false },
        { text: "20", correct: false },
        ], 
    },
    { question: "What is the symbol for Uranium?", answers: [
        { text: "U", correct: true },
        { text: "Ur", correct: false },
        { text: "Um", correct: false },
        { text: "Un", correct: false },
        ], 
    },
    { question: "What is the atomic number of Potassium?", answers: [
        { text: "19", correct: true },
        { text: "18", correct: false },
        { text: "20", correct: false },
        { text: "21", correct: false },
        ], 
    },
    { question: "What is the symbol for Chromium?", answers: [
        { text: "Cr", correct: true },
        { text: "Cm", correct: false },
        { text: "C", correct: false },
        { text: "Ch", correct: false },
        ], 
    },
    { question: "What is the atomic number of Manganese?", answers: [
        { text: "25", correct: true },
        { text: "24", correct: false },
        { text: "26", correct: false },
        { text: "27", correct: false },
        ], 
    },
    { question: "What is the symbol for Platinum?", answers: [
        { text: "Pt", correct: true },
        { text: "Pl", correct: false },
        { text: "P", correct: false },
        { text: "Pu", correct: false },
        ], 
    },
    { question: "What is the atomic number of Copper?", answers: [
        { text: "29", correct: true },
        { text: "28", correct: false },
        { text: "30", correct: false },
        { text: "31", correct: false },
        ], 
    },
    { question: "What is the symbol for Barium?", answers: [
        { text: "Ba", correct: true },
        { text: "B", correct: false },
        { text: "Bi", correct: false },
        { text: "Be", correct: false },
        ], 
    },
    { question: "What is the atomic number of Tin?", answers: [
        { text: "50", correct: true },
        { text: "48", correct: false },
        { text: "51", correct: false },
        { text: "49", correct: false },
        ],
    },
    { question: "What is the symbol for Cobalt?", answers: [
        { text: "Co", correct: true },
        { text: "Ca", correct: false },
        { text: "C", correct: false },
        { text: "Cu", correct: false },
        ], 
    },
    { question: "What is the atomic number of Magnesium?", answers: [
        { text: "12", correct: true },
        { text: "10", correct: false },
        { text: "14", correct: false },
        { text: "16", correct: false },
        ], 
    },
    { question: "What is the symbol for Iodine?", answers: [
        { text: "I", correct: true },
        { text: "Ir", correct: false },
        { text: "In", correct: false },
        { text: "Id", correct: false },
        ], 
    },
    { question: "What is the atomic number of Sodium?", answers: [
        { text: "11", correct: true },
        { text: "12", correct: false },
        { text: "13", correct: false },
        { text: "14", correct: false },
        ], 
    },
    { question: "What is the symbol for Tantalum?", answers: [
        { text: "Ta", correct: true },
        { text: "Tn", correct: false },
        { text: "Tm", correct: false },
        { text: "Tr", correct: false },
        ], 
    },
    { question: "What is the atomic number of Yttrium?", answers: [
        { text: "39", correct: true },
        { text: "40", correct: false },
        { text: "41", correct: false },
        { text: "42", correct: false },
        ], 
    },
    { question: "What is the symbol for Thallium?", answers: [
        { text: "Tl", correct: true },
        { text: "Ta", correct: false },
        { text: "Tm", correct: false },
        { text: "Tl", correct: false },
        ], 
    },
    { question: "What is the atomic number of Xenon?", answers: [
        { text: "54", correct: true },
        { text: "56", correct: false },
        { text: "52", correct: false },
        { text: "50", correct: false },
        ], 
    },
    { question: "What is the symbol for Cesium?", answers: [
        { text: "Cs", correct: true },
        { text: "Ce", correct: false },
        { text: "C", correct: false },
        { text: "Ca", correct: false },
        ], 
    },
    { question: "What is the atomic number of Krypton?", answers: [
        { text: "36", correct: true },
        { text: "38", correct: false },
        { text: "40", correct: false },
        { text: "42", correct: false },
        ], 
    },
    { question: "What is the symbol for Rubidium?", answers: [
        { text: "Rb", correct: true },
        { text: "Re", correct: false },
        { text: "Ra", correct: false },
        { text: "Rh", correct: false },
        ], 
    },
    { question: "What is the atomic number of Calcium?", answers: [
        { text: "20", correct: true },
        { text: "18", correct: false },
        { text: "22", correct: false },
        { text: "24", correct: false },
        ], 
    },
    { question: "What is the symbol for Francium?", answers: [
        { text: "Fr", correct: true },
        { text: "Fi", correct: false },
        { text: "Fa", correct: false },
        { text: "Fe", correct: false },
        ], 
    },
    { question: "What is the atomic number of Boron?", answers: [
        { text: "5", correct: true },
        { text: "3", correct: false },
        { text: "6", correct: false },
        { text: "7", correct: false },
        ], 
    },
    { question: "What is the symbol for Nitrogen?", answers: [
        { text: "N", correct: true },
        { text: "Ni", correct: false },
        { text: "Ne", correct: false },
        { text: "No", correct: false },
        ], 
    },
    { question: "What is the atomic number of Argon?", answers: [
        { text: "18", correct: true },
        { text: "16", correct: false },
        { text: "20", correct: false },
        { text: "22", correct: false },
        ], 
    },
    { question: "What is the symbol for Helium?", answers: [
        { text: "He", correct: true },
        { text: "H", correct: false },
        { text: "Ho", correct: false },
        { text: "Hl", correct: false },
        ], 
    },
    { question: "What is the atomic number of Lithium?", answers: [
        { text: "3", correct: true },
        { text: "4", correct: false },
        { text: "5", correct: false },
        { text: "6", correct: false },
        ], 
    },
    { question: "What is the symbol for Neon?", answers: [
        { text: "Ne", correct: true },
        { text: "N", correct: false },
        { text: "Na", correct: false },
        { text: "Nb", correct: false },
        ], 
    },
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";

   
    shuffledQuestions = shuffleArray([...questions]).slice(0, 10); 
    resetState();
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    if (!currentQuestion || !currentQuestion.answers) {
        console.error("Invalid question or answers:", currentQuestion);
        return;
    }

    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

    const shuffledAnswers = shuffleArray([...currentQuestion.answers]); // Shuffle answers for current question

    shuffledAnswers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${shuffledQuestions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < shuffledQuestions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
