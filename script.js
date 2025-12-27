let currentQuestion = 1;
let answers = {};

function startTest() {
  document.querySelector(".box").style.display = "none";
  document.getElementById("questionBox").style.display = "block";

  showQuestion1();
}

function showQuestion1() {
  document.getElementById("question").innerText =
    "Q1. What excites you more?";

  document.getElementById("btn1").innerText = "💻 Solving logical problems";
  document.getElementById("btn2").innerText = "🎨 Designing & creativity";

  document.getElementById("btn1").onclick = () => answer("code");
  document.getElementById("btn2").onclick = () => answer("creative");
}

function showQuestion2(type) {
  if (type === "code") {
    document.getElementById("question").innerText =
      "Q2. How do you like to work?";

    document.getElementById("btn1").innerText = "🧠 Debug & solve issues";
    document.getElementById("btn2").innerText = "📐 Build structured systems";

    document.getElementById("btn1").onclick = () => answer("problem");
    document.getElementById("btn2").onclick = () => answer("system");
  } else {
    document.getElementById("question").innerText =
      "Q2. What do you enjoy more?";

    document.getElementById("btn1").innerText = "🎨 UI / Visual design";
    document.getElementById("btn2").innerText = "✍️ Content & ideas";

    document.getElementById("btn1").onclick = () => answer("design");
    document.getElementById("btn2").onclick = () => answer("content");
  }
}

function answer(choice) {
  answers["q" + currentQuestion] = choice;

  if (currentQuestion === 1) {
    currentQuestion = 2;
    showQuestion2(choice);
  } else {
    showResult();
  }
}

function showResult() {
  let resultTitle = "";
  let focus = "";
  let skills = "";
  let roadmap = "";

  if (answers.q1 === "code" && (answers.q2 === "problem" || answers.q2 === "system")) {
    resultTitle = "💻 Software Developer";
    focus = "Logic, problem solving, patience & consistency";
    skills = `
• HTML, CSS, JavaScript  
• One language (Python / Java / C++)  
• Data Structures (basic)  
• Git & GitHub  
    `;
    roadmap = `
0–3 months: Programming basics  
3–6 months: Projects + GitHub  
6–12 months: Internship / Job prep  
    `;
  } 
  else if (answers.q1 === "creative" && answers.q2 === "design") {
    resultTitle = "🎨 UI / UX Designer";
    focus = "Creativity, user thinking & visual clarity";
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
  } 
  else {
    resultTitle = "🚀 Tech + Creative Career";
    focus = "Balance between technology & creativity";
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

    <button onclick="location.reload()">🔄 Restart Test</button>
  `;
}
