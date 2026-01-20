const questions = [
    { text: "Elefanten fliegen gerne durch die Wüsten Pangeas", answer: true },
    { text: "Man sollte seine Unterwäsche täglich wechseln", answer: false },
    { text: "Das Verständnis von Kristallisationsdifferentiation ist für den Alltag unabdingbar", answer: true }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const scoreElement = document.getElementById("score");

function Questionload() {
    if (currentQuestionIndex < questions.length) {
        questionElement.innerText = questions[currentQuestionIndex].text;
    } else {
        questionElement.innerText = "Quiz beendet!";
        
        const buttonsContainer = document.querySelector(".buttons");
        if (buttonsContainer) {
            buttonsContainer.style.display = "none";
        }
    }
}

function checkAnswer(userAnswer) {
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    scoreElement.innerText = `Score: ${score}`;
    Questionload();
}

Questionload();
