let currentQuestion = 0;

let score = {
  tech: 0,
  medical: 0,
  business: 0,
  arts: 0
};

const questions = [
  {
    q: "Which subject do you enjoy most?",
    options: [
      { text: "Computer / Coding", type: "tech", weight: 2 },
      { text: "Biology", type: "medical", weight: 2 },
      { text: "Accounts", type: "business", weight: 2 },
      { text: "Drawing", type: "arts", weight: 2 }
    ]
  },
  {
    q: "What type of work do you like?",
    options: [
      { text: "Problem solving", type: "tech", weight: 2 },
      { text: "Helping people", type: "medical", weight: 2 },
      { text: "Leading teams", type: "business", weight: 2 },
      { text: "Creative work", type: "arts", weight: 2 }
    ]
  },
  {
    q: "Your strongest skill?",
    options: [
      { text: "Logic", type: "tech", weight: 2 },
      { text: "Care & patience", type: "medical", weight: 2 },
      { text: "Communication", type: "business", weight: 2 },
      { text: "Creativity", type: "arts", weight: 2 }
    ]
  }
];

// LOGIN
function login() {
  const name = document.getElementById("username").value;
  if (!name) {
    alert("Enter your name");
    return;
  }
  localStorage.setItem("careerUser", name);
  document.getElementById("loginScreen").classList.add("hidden");
  document.getElementById("startScreen").classList.remove("hidden");
}

// START TEST
function startTest() {
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  loadQuestion();
}

// LOAD QUESTION
function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.q;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("div");
    btn.className = "option";
    btn.innerText = opt.text;
    btn.onclick = () => selectOption(opt.type, opt.weight);
    optionsDiv.appendChild(btn);
  });
}

// SELECT OPTION
function selectOption(type, weight) {
  score[type] += weight;
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// RESULT
function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  let bestCareer = Object.keys(score).reduce((a, b) =>
    score[a] > score[b] ? a : b
  );

  let html = "";

  if (bestCareer === "tech") {
    html = `
    <h3>Software Developer 👨‍💻</h3>
    <p><b>Subjects:</b> Maths, Computer</p>
    <ul>
      <li>HTML, CSS, JavaScript</li>
      <li>Python / Java</li>
      <li>Build projects</li>
    </ul>`;
  } else if (bestCareer === "medical") {
    html = `
    <h3>Doctor 🩺</h3>
    <p><b>Subjects:</b> Biology, Chemistry, Physics</p>
    <ul>
      <li>PCB in 11–12</li>
      <li>NEET exam</li>
      <li>MBBS</li>
    </ul>`;
  } else if (bestCareer === "business") {
    html = `
    <h3>Business / Management 📊</h3>
    <p><b>Subjects:</b> Accounts, Economics</p>
    <ul>
      <li>Finance basics</li>
      <li>Marketing</li>
      <li>MBA (optional)</li>
    </ul>`;
  } else {
    html = `
    <h3>Designer 🎨</h3>
    <p><b>Skills:</b> Creativity</p>
    <ul>
      <li>Canva</li>
      <li>Figma / Photoshop</li>
      <li>Portfolio</li>
    </ul>`;
  }

  document.getElementById("finalResult").innerHTML = html;
  localStorage.setItem("careerResult", html);
}

// PDF
function downloadPDF() {
  const element = document.getElementById("result");
  html2pdf().from(element).save("CareerPathAI_Result.pdf");
}

// LOGOUT
function logout() {
  localStorage.clear();
  location.reload();
}

// AUTO LOAD
window.onload = () => {
  const user = localStorage.getItem("careerUser");
  const result = localStorage.getItem("careerResult");
  if (user && result) {
    document.getElementById("loginScreen").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("finalResult").innerHTML = result;
  }
};        <li>Learn JavaScript (Logic)</li>
        <li>Then Python / Java</li>
        <li>Build small projects</li>
      </ul>
      <p><b>Best free learning platforms:</b></p>
      <ul>
        <li>freeCodeCamp</li>
        <li>W3Schools</li>
        <li>YouTube (CodeWithHarry, Apna College)</li>
      </ul>
    `;
  }

  else if (bestCareer === "medical") {
    resultHTML = `
      <h3>Career: Doctor 🩺</h3>
      <p><b>Subjects needed:</b> Biology, Chemistry, Physics</p>
      <p><b>Roadmap:</b></p>
      <ul>
        <li>Class 10 → Choose PCB</li>
        <li>Class 11–12 → Focus on NCERT</li>
        <li>Prepare for NEET</li>
        <li>MBBS → Internship → Specialization</li>
      </ul>
      <p><b>Start now:</b> Daily Biology revision</p>
    `;
  }

  else if (bestCareer === "business") {
    resultHTML = `
      <h3>Career: Business / Management 📊</h3>
      <p><b>Subjects needed:</b> Accounts, Economics</p>
      <p><b>How to start:</b></p>
      <ul>
        <li>Learn basic finance</li>
        <li>Improve communication skills</li>
        <li>Understand marketing</li>
        <li>MBA (optional)</li>
      </ul>
      <p><b>Practice:</b> Internships, real business ideas</p>
    `;
  }

  else {
    resultHTML = `
      <h3>Career: Designer 🎨</h3>
      <p><b>Skills needed:</b> Creativity, Visual sense</p>
      <p><b>How to start:</b></p>
      <ul>
        <li>Start with Canva</li>
        <li>Learn Figma / Photoshop</li>
        <li>Create designs daily</li>
        <li>Build portfolio</li>
      </ul>
      <p><b>Learn from:</b> YouTube, Behance, Dribbble</p>
    `;
  }

  document.getElementById("finalResult").innerHTML = resultHTML;
}
