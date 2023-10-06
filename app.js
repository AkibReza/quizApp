const questions = [
  {
    question: "PH scale full form is___?",
    options: [
      "Power on Hydrogen",
      "Potential of Helium",
      "Potential of Hydrogen",
      "Power of Hydrogen",
    ],
    correctAnswer: "Potential of Hydrogen",
  },
  {
    question: "What number on the scale represents a neutral level?",
    options: ["0", "7", "14", "10"],
    correctAnswer: "7",
  },
  {
    question: "Which of these colors would suggest the most acidic solution?",
    options: ["Yellow", "Red", "Green", "Blue"],
    correctAnswer: "Red",
  },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function renderQuestion(questionObj) {
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
        <h2>${questionObj.question}</h2>
        <ul>
            ${questionObj.options
              .map((option) => `<li class="button">${option}</li>`)
              .join("")}
        </ul>
    `;

  const optionElements = Array.from(questionContainer.querySelectorAll("li"));
  optionElements.forEach((option) => {
    option.addEventListener("click", () =>
      checkAnswer(option.textContent, questionObj.correctAnswer)
    );
  });
}

function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  finalScore.innerHTML = ""; // Reset the final score display
  shuffleArray(questions);
  questions.forEach((question) => shuffleArray(question.options));
  renderQuestion(questions[0]);
  resetButton.classList.add("hidden");
}

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetQuiz);
let score = 0;

function checkAnswer(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    score++;
  }
  renderNextQuestion();
}

let currentQuestionIndex = 0;

const finalScore = document.getElementById("score");

function renderNextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion(questions[currentQuestionIndex]);
  } else {
    finalScore.innerHTML = `Your score is ${score}`;
    resetButton.classList.remove("hidden");
  }
}

shuffleArray(questions);
questions.forEach((question) => shuffleArray(question.options));

renderQuestion(questions[0]);
