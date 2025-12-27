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
      "Q2. How do you prefer to work?";
    document.getElementById("btn1").innerText = "Problem Solving";
    document.getElementById("btn1").setAttribute("onclick", "answer('problem')");
    document.getElementById("btn2").innerText = "Creative Design";
    document.getElementById("btn2").setAttribute("onclick", "answer('design')");
    currentQuestion = 2;
  } else {
    showResult();
  }
}

function showResult() {
  let resultTitle = "";
  let focus = "";
  let skills = "";
  let roadmap = "";

  if (answers.q1 === "code" && answers.q2 === "problem") {
    resultTitle = "💻 Software Developer";
    focus = "Logical thinking, problem solving aur consistency";
    skills = `
• HTML, CSS, JavaScript
• One programming language (Python / Java / C++)
• Data Structures (basic)
• Git & GitHub
`;
    roadmap = `
0–3 months: Web basics
3–6 months: Projects + GitHub
6–12 months: Internship / Job prep
`;
  } else if (answers.q1 === "creative" && answers.q2 === "design") {
    resultTitle = "🎨 UI / UX Designer";
    focus = "Creativity, user thinking aur visual clarity";
    skills = `
• Figma / Adobe XD
• Color theory & typography
• UI principles
• Basic HTML & CSS
`;
    roadmap = `
0–2 months: Design basics
2–5 months: App & web design
6–12 months: Portfolio + Freelancing
`;
  } else {
    resultTitle = "🚀 Tech + Creative Career";
    focus = "Balance between technology aur creativity";
    skills = `
• Web development basics
• UI design
• AI tools
• Content creation
`;
    roadmap = `
0–3 months: Basics
3–6 months: Personal projects
6–12 months: Freelance / Startup
`;
  }

  document.getElementById("questionBox").innerHTML = `
    <h2>Result</h2>
    <h3>${resultTitle}</h3>

    <p><b>🎯 Life Focus:</b><br>${focus}</p>

    <p><b>🛠 Skills to Learn:</b><br>${skills.replace(/\n/g, "<br>")}</p>

    <p><b>🗺 Roadmap:</b><br>${roadmap.replace(/\n/g, "<br>")}</p>

    <button onclick="location.reload()">Restart Test</button>
  `;
}
