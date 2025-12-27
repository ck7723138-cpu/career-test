let currentQuestion = 1;

function startTest() {
  document.querySelector(".box").style.display = "none";
  document.getElementById("questionBox").style.display = "block";
}

function answer(choice) {
  if (currentQuestion === 1) {
    // Q2
    document.getElementById("question").innerText =
      "Q2. How do you prefer to work?";

    document.getElementById("btn1").innerText = "With Code / Logic";
    document.getElementById("btn2").innerText = "With Creativity";

    currentQuestion = 2;
  } else {
    // Result
    document.getElementById("question").innerText =
      "Test Completed ✅";

    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "none";
  }
}
