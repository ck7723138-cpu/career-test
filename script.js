let step = 1;
let interest = "";

function startTest() {
  document.getElementById("startBox").style.display = "none";
  document.getElementById("questionBox").style.display = "block";
  showQuestion1();
}

function showQuestion1() {
  document.getElementById("question").innerText =
    "What excites you more?";

  document.getElementById("btn1").innerText = "💻 Technology & Logic";
  document.getElementById("btn2").innerText = "🎨 Creativity & Design";

  document.getElementById("btn1").onclick = () => selectInterest("software");
  document.getElementById("btn2").onclick = () => selectInterest("creative");
}

function selectInterest(choice) {
  interest = choice;
  showQuestion2();
}

function showQuestion2() {
  if (interest === "software") {
    document.getElementById("question").innerText =
      "Do you enjoy solving problems and debugging?";

    document.getElementById("btn1").innerText = "Yes, I enjoy it";
    document.getElementById("btn2").innerText = "Sometimes";

  } else {
    document.getElementById("question").innerText =
      "Do you like creating visuals or new ideas?";

    document.getElementById("btn1").innerText = "Yes, a lot";
    document.getElementById("btn2").innerText = "A little";
  }

  document.getElementById("btn1").onclick = showResult;
  document.getElementById("btn2").onclick = showResult;
}

function showResult() {
  let resultHTML = "";

  if (interest === "software") {
    resultHTML = `
      <h2>💻 Software Career Path</h2>
      <p><b>Focus in life:</b> Logic, consistency, patience</p>
      <p><b>Skills to learn:</b><br>
      HTML, CSS, JavaScript<br>
      One language (Python / Java)<br>
      Problem solving</p>
      <p><b>Reality:</b><br>
      First 6 months learning<br>
      1 year projects<br>
      2 years earning possible</p>
      <button onclick="location.reload()">Restart</button>
    `;
  } else {
    resultHTML = `
      <h2>🎨 Creative Career Path</h2>
      <p><b>Focus in life:</b> Creativity, observation</p>
      <p><b>Skills to learn:</b><br>
      UI/UX Design<br>
      Video editing<br>
      Content creation</p>
      <p><b>Reality:</b><br>
      Skills first<br>
      Portfolio important<br>
      Income grows slowly</p>
      <button onclick="location.reload()">Restart</button>
    `;
  }

  document.getElementById("questionBox").innerHTML = resultHTML;
}
