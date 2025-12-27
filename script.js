let currentQuestion = 1;
let answers = {};

function startTest() {
  document.querySelector(".box").style.display = "none";
  document.getElementById("questionBox").style.display = "block";
}

function answer(choice) {
  answers["q" + currentQuestion] = choice;

  if (currentQuestion === 1) {
    // Q2 show
    document.getElementById("question").innerText =
      "Q2. How do you prefer to work?";

    document.getElementById("btn1").innerText = "With Code / Logic";
    document.getElementById("btn1").onclick = function () {
      answer("code");
    };

    document.getElementById("btn2").innerText = "With Creativity";
    document.getElementById("btn2").onclick = function () {
      answer("creative");
    };

    currentQuestion = 2;
  } else {
    // FINAL RESULT
    document.getElementById("question").innerText =
      "Test Completed ✅";

    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "none";

    console.log(answers);
  }
}
