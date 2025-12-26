let currentQuestion = 1;
let answers = {};

function startTest() {
  document.querySelector(".box").style.display = "none";
  document.getElementById("questionBox").style.display = "block";
}

function answer(choice) {
  answers["q" + currentQuestion] = choice;

  if (currentQuestion === 1) {
    // Q2 show karo
    document.getElementById("question").innerText =
      "Q2. How do you prefer to work?";
    document.getElementById("btn1").innerText = "With Code / Logic";
    document.getElementById("btn1").setAttribute("onclick", "answer('code')");
    document.getElementById("btn2").innerText = "With Creativity";
    document.getElementById("btn2").setAttribute("onclick", "answer('creative')");
    currentQuestion = 2;
  } else {
    alert("Test completed ✅");
    console.log(answers);
  }
}
