let userName = "";
let currentQuestion = 0;
let scores = {
  doctor: 0,
  designer: 0,
  developer: 0
};

const questions = [
  {
    q: "What do you enjoy more?",
    options: [
      { text: "Helping sick people", type: "doctor" },
      { text: "Creating visuals & art", type: "designer" },
      { text: "Building apps/websites", type: "developer" }
    ]
  },
  {
    q: "Which subject do you like?",
    options: [
      { text: "Biology", type: "doctor" },
      { text: "Drawing / Creativity", type: "designer" },
      { text: "Maths / Logic", type: "developer" }
    ]
  },
  {
    q: "How do you solve problems?",
    options: [
      { text: "Carefully & patiently", type: "doctor" },
      { text: "Creatively", type: "designer" },
      { text: "Step by step logically", type: "developer" }
    ]
  }
];

function startApp() {
  userName = document.getElementById("userName").value.trim();
  if (userName === "") {
    alert("Please enter your name");
    return;
  }
  localStorage.setItem("careerUser", userName);
  document.getElementById("loginScreen").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  loadQuestion();
}

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.q;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("div");
    btn.className = "option";
    btn.innerText = opt.text;
    btn.onclick = () => selectOption(opt.type);
    optionsDiv.appendChild(btn);
  });
}

function selectOption(type) {
  scores[type]++;
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  let career = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  let resultHTML = `<h3>Hello ${userName} 👋</h3>`;

  if (career === "doctor") {
    resultHTML += `
      <p><b>Recommended Career: Doctor</b></p>
      <ul>
        <li>Subjects: Biology, Chemistry, Physics</li>
        <li>Start with: NEET preparation</li>
        <li>Courses: MBBS, BDS</li>
        <li>Skills: Patience, Care, Discipline</li>
      </ul>
    `;
  }

  if (career === "designer") {
    resultHTML += `
      <p><b>Recommended Career: Designer</b></p>
      <ul>
        <li>Start with: Canva, Figma</li>
        <li>Learn: UI/UX, Graphic Design</li>
        <li>Platforms: YouTube, Coursera</li>
        <li>Skills: Creativity, Color sense</li>
      </ul>
    `;
  }

  if (career === "developer") {
    resultHTML += `
      <p><b>Recommended Career: Developer</b></p>
      <ul>
        <li>Start with: HTML, CSS, JavaScript</li>
        <li>Then: React, Python, Java</li>
        <li>Practice: GitHub, Projects</li>
        <li>Skills: Logic, Problem-solving</li>
      </ul>
    `;
  }

  document.getElementById("finalResult").innerHTML = resultHTML;
}

function downloadPDF() {
  const content = document.getElementById("finalResult").innerText;
  const blob = new Blob([content], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "CareerPath_Result.txt";
  a.click();
}    <h3>Software Developer 👨‍💻</h3>
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
