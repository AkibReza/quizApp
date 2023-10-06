function renderNextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion(questions[currentQuestionIndex]);
  } else {
    finalScore.innerHTML = `Your score is ${score}`;
    resetButton.classList.remove("hidden");
    // Optionally, you can reset the quiz or do something else here.
  }
}
