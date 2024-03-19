const quizData = {
    questions: [
      {
        question: "Barium + Oxygen",
        correct_answer: 'Ba O',
      },
      {
        question: 'Magnesium + sulfur',
        correct_answer: 'Mg S',
      },
      {
        question: 'Potassium + Iodine',
        correct_answer: 'K I',
      },
      {
        question: "Aluminum + Phosphorus",
        correct_answer: 'Al P',
      },
      {
        question: "Sodium + Bromide",
        correct_answer: 'Na Br',
      },
      {
        question: 'Iron(III) Oxide',
        correct_answer: 'Fe O3',
      },
      {
        question: 'Magnesium + Nitrogen',
        correct_answer: 'Mg N',
      },
      {
        question: "Potassium Cholride",
        correct_answer: 'K Cl',
      },
      {
        question: 'Silver Flioride',
        correct_answer: 'Ag F2',
      },
      {
        question: 'Calcium Chlorate',
        correct_answer: 'Ca ClO3',
      },
    ],
  };

const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const header = document.getElementById("header");
const submitButton = document.createElement("button");
submitButton.textContent = "Submit";
quizContainer.appendChild(submitButton);

let score = 0;

function displayQuestion(questionIndex) {
  header.textContent = `Question ${questionIndex + 1}`;
  questionContainer.textContent = quizData.questions[questionIndex].question;
}

function checkAnswer(questionIndex, userAnswer) {
  const correctAnswer = quizData.questions[questionIndex].correct_answer;
  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    score++;
  }
}

function displayScore() {
  questionContainer.textContent = `Your Score: ${score}/${quizData.questions.length}`;
  optionsContainer.innerHTML = "";
  header.textContent = "Quiz Completed";
  submitButton.style.display = "none";
}

let currentQuestionIndex = 0;
displayQuestion(currentQuestionIndex);

submitButton.addEventListener("click", () => {
  const userAnswer = optionsContainer.value;
  checkAnswer(currentQuestionIndex, userAnswer);
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.questions.length) {
    displayQuestion(currentQuestionIndex);
  } else {
    displayScore();
  }
});
