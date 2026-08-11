const questions = [

    {
        question:
            "Which monument is known as the symbol of love?",

        options: [
            "Red Fort",
            "Taj Mahal",
            "Amer Fort",
            "Gateway of India"
        ],

        answer: 1
    },


    {
        question:
            "Garba is traditionally associated with which Indian state?",

        options: [
            "Punjab",
            "Kerala",
            "Gujarat",
            "Odisha"
        ],

        answer: 2
    },


    {
        question:
            "Which festival is known as the Festival of Lights?",

        options: [
            "Holi",
            "Diwali",
            "Onam",
            "Pongal"
        ],

        answer: 1
    },


    {
        question:
            "Madhubani painting is traditionally associated with which state?",

        options: [
            "Bihar",
            "Gujarat",
            "Kerala",
            "Rajasthan"
        ],

        answer: 0
    },


    {
        question:
            "Which classical dance form originated in Tamil Nadu?",

        options: [
            "Kathak",
            "Bharatanatyam",
            "Garba",
            "Bhangra"
        ],

        answer: 1
    },


    {
        question:
            "Onam is primarily celebrated in which state?",

        options: [
            "Kerala",
            "Punjab",
            "Gujarat",
            "West Bengal"
        ],

        answer: 0
    },


    {
        question:
            "The Konark Sun Temple is located in which state?",

        options: [
            "Rajasthan",
            "Odisha",
            "Maharashtra",
            "Karnataka"
        ],

        answer: 1
    },


    {
        question:
            "Which Indian textile tradition is famous for mirror work?",

        options: [
            "Kutch Embroidery",
            "Phulkari",
            "Madhubani",
            "Pattachitra"
        ],

        answer: 0
    },


    {
        question:
            "Pongal is traditionally associated with which state?",

        options: [
            "Tamil Nadu",
            "Bihar",
            "Gujarat",
            "Assam"
        ],

        answer: 0
    },


    {
        question:
            "Which dance is strongly associated with Navratri celebrations in Gujarat?",

        options: [
            "Kathak",
            "Garba",
            "Kathakali",
            "Bharatanatyam"
        ],

        answer: 1
    }

];


let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;


/* ELEMENTS */

const questionNumber =
    document.getElementById(
        "questionNumber"
    );

const scoreDisplay =
    document.getElementById(
        "scoreDisplay"
    );

const questionElement =
    document.getElementById(
        "question"
    );

const optionsContainer =
    document.getElementById(
        "options"
    );

const nextButton =
    document.getElementById(
        "nextButton"
    );

const progressBar =
    document.getElementById(
        "progressBar"
    );

const quizCard =
    document.querySelector(
        ".quiz-card"
    );

const resultCard =
    document.getElementById(
        "resultCard"
    );


/* LOAD QUESTION */

function loadQuestion() {

    selectedAnswer = null;

    nextButton.disabled = true;


    const current =
        questions[currentQuestion];


    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    scoreDisplay.textContent =
        `Score: ${score}`;


    questionElement.textContent =
        current.question;


    optionsContainer.innerHTML = "";


    current.options.forEach(
        (option, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "option-btn";


            button.textContent =
                option;


            button.onclick = () => {

                selectAnswer(
                    index,
                    button
                );

            };


            optionsContainer.appendChild(
                button
            );

        }
    );


    const progress =
        ((currentQuestion + 1) /
            questions.length) * 100;


    progressBar.style.width =
        `${progress}%`;

}


/* SELECT ANSWER */

function selectAnswer(
    selectedIndex,
    selectedButton
) {

    if (selectedAnswer !== null) {
        return;
    }


    selectedAnswer =
        selectedIndex;


    const current =
        questions[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".option-btn"
        );


    buttons.forEach(button => {

        button.disabled = true;

    });


    if (
        selectedIndex ===
        current.answer
    ) {

        selectedButton.classList.add(
            "correct"
        );

        score++;

    } else {

        selectedButton.classList.add(
            "wrong"
        );


        buttons[
            current.answer
        ].classList.add(
            "correct"
        );

    }


    scoreDisplay.textContent =
        `Score: ${score}`;


    nextButton.disabled = false;

}


/* NEXT QUESTION */

function nextQuestion() {

    currentQuestion++;


    if (
        currentQuestion >=
        questions.length
    ) {

        showResult();

        return;

    }


    loadQuestion();

}


/* SHOW RESULT */

function showResult() {

    quizCard.style.display =
        "none";


    resultCard.style.display =
        "block";


    document.getElementById(
        "finalScore"
    ).textContent =
        `${score} / ${questions.length}`;


    let message;


    const percentage =
        (score / questions.length)
        * 100;


    if (percentage >= 80) {

        message =
            "Excellent! You are a true heritage enthusiast! 🇮🇳";

    } else if (percentage >= 50) {

        message =
            "Great job! You know quite a lot about India's heritage.";

    } else {

        message =
            "Good attempt! Explore Bharat Heritage and try again.";

    }


    document.getElementById(
        "resultMessage"
    ).textContent =
        message;

}


/* RESTART */

function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    selectedAnswer = null;


    quizCard.style.display =
        "block";


    resultCard.style.display =
        "none";


    loadQuestion();

}


/* START */

loadQuestion();