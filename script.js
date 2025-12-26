function startTest() {
  document.querySelector(".box").style.display = "none";
  document.getElementById("questionBox").style.display = "block";
}

function answer(choice) {
  alert("You selected: " + choice);
}
