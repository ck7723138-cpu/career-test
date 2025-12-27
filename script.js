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
  let result = "";

  if (answers.q1 === "code" && answers.q2 === "problem") {
    result = "💻 Software Developer";
  } else if (answers.q1 === "creative" && answers.q2 === "design") {
    result = "🎨 UI / UX Designer";
  } else {
    result = "🚀 Tech + Creative Career";
  }

  document.getElementById("questionBox").innerHTML = `
    <h2>Result</h2>
    <p>You are best suited for:</p>
    <h3>${result}</h3>
    <button onclick="location.reload()">Restart Test</button>
  `;
}
