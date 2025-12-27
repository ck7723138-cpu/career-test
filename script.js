let currentQuestion = 1;
let answers = {};

function startTest() {
  document.querySelector(".box").style.display = "none";
  document.getElementById("questionBox").style.display = "block";
}

function answer(choice) {
  answers["q" + currentQuestion] = choice;

  if (currentQuestion === 1) {
    document.getElementById("question").innerText =
      "Q2. What do you enjoy more?";
    document.getElementById("btn1").innerText = "Solving Problems";
    document.getElementById("btn1").onclick = () => answer("problem");

    document.getElementById("btn2").innerText = "Creating Designs";
    document.getElementById("btn2").onclick = () => answer("design");

    currentQuestion = 2;
  } else {
    showResult();
  }
}

function showResult() {
  let resultText = "";

  if (answers.q1 === "code" && answers.q2 === "problem") {
    resultText = "💻 You should become a Software Developer";
  } else if (answers.q1 === "creative" && answers.q2 === "design") {
    resultText = "🎨 You should become a UI/UX Designer";
  } else {
    resultText = "🚀 You are suitable for Tech & Creative fields";
  }

  document.getElementById("questionBox").innerHTML = `
    <h2>Result</h2>
    <p>${resultText}</p>
    <button onclick="location.reload()">Retake Test</button>
  `;
}
