const quizForm = document.querySelector(".quiz-form");
const btnQuiz = document.querySelector(".btn-quiz");
const output = document.querySelector(".output-quiz");
const solutions = [
  "90",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "85",
  "40",
  "a + b + c",
  "0",
  "45",
];

function quiz() {
  const userAnswers = new FormData(quizForm);
  let score = 0;
  let i = 0;
  for (let answer of userAnswers.values()) {
    if (answer === solutions[i]) {
      score++;
    }
    i++;
  }
  output.innerText = `Your total score is: ${score}`;
}

btnQuiz.addEventListener("click", quiz);
