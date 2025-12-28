let currentQuestion = 0;
let userName = "";

const scores = {
  doctor: 0,
  designer: 0,
  developer: 0
};

const questions = [
  {
    q: "What do you like most?",
    options: [
      { text: "Helping patients", type: "doctor" },
      { text: "Design & creativity", type: "designer" },
      { text: "Coding & logic", type: "developer" }
    ]
  },
  {
    q: "Your favorite subject?",
    options: [
      { text: "Biology", type: "doctor" },
      { text: "Arts", type: "designer" },
      { text: "Maths", type: "developer" }
    ]
  },
  {
    q: "How do you think?",
    options: [
      { text: "Carefully", type: "doctor" },
      { text: "Creatively", type: "designer" },
      { text: "Logically", type: "developer" }
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("startBtn").addEventListener("click", startApp);
  document.getElementById("pdfBtn").addEventListener("click", downloadResult);
});

function startApp() {
  const input = document.getElementById("userName");
  userName = input.value.trim();

  if (!userName) {
    alert("Please enter your name");
    return;
  }

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
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = opt.text;
    div.addEventListener("click", () => selectOption(opt.type));
    optionsDiv.appendChild(div);
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

  const career = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  let html = `<h3>Hello ${userName}</h3>`;

  if (career === "doctor") {
    html += `<p><b>Doctor</b><br>Subjects: PCB<br>Start: NEET</p>`;
  }
  if (career === "designer") {
    html += `<p><b>Designer</b><br>Start: Canva, Figma</p>`;
  }
  if (career === "developer") {
    html += `<p><b>Developer</b><br>Start: HTML, CSS, JS</p>`;
  }

  document.getElementById("finalResult").innerHTML = html;
}

function downloadResult() {
  const text = document.getElementById("finalResult").innerText;
  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Career_Result.txt";
  link.click();
}  }

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
let currentQuestion = 0;
let userName = "";

const scores = {
  doctor: 0,
  designer: 0,
  developer: 0
};

const questions = [
  {
    q: "What do you like most?",
    options: [
      { text: "Helping patients", type: "doctor" },
      { text: "Design & creativity", type: "designer" },
      { text: "Coding & logic", type: "developer" }
    ]
  },
  {
    q: "Your favorite subject?",
    options: [
      { text: "Biology", type: "doctor" },
      { text: "Arts", type: "designer" },
      { text: "Maths", type: "developer" }
    ]
  },
  {
    q: "How do you think?",
    options: [
      { text: "Carefully", type: "doctor" },
      { text: "Creatively", type: "designer" },
      { text: "Logically", type: "developer" }
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("startBtn").addEventListener("click", startApp);
});

function startApp() {
  const input = document.getElementById("userName");
  userName = input.value.trim();

  if (!userName) {
    alert("Please enter your name");
    return;
  }

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
    const btn = document.createElement("button");
    btn.innerText = opt.text;
    btn.onclick = () => selectOption(opt.type);
    optionsDiv.appendChild(btn);
  });
}

function selectOption(type) {
let userName = "";
let currentQuestion = 0;
let selectedPath = ""; // AI decides path

const scores = {
  doctor: 0,
  designer: 0,
  developer: 0
};

/* AI QUESTION BANK */
const questionSets = {
  start: [
    {
      q: "What do you like most?",
      options: [
        { text: "Helping sick people", type: "doctor" },
        { text: "Design & creativity", type: "designer" },
        { text: "Coding & technology", type: "developer" }
      ]
    }
  ],

  doctor: [
    {
      q: "Which subject do you enjoy most?",
      options: [
        { text: "Biology", type: "doctor" },
        { text: "Chemistry", type: "doctor" },
        { text: "Physics", type: "doctor" }
      ]
    },
    {
      q: "How do you feel about long study hours?",
      options: [
        { text: "I can manage", type: "doctor" },
        { text: "Hard but possible", type: "doctor" },
        { text: "Not for me", type: "designer" }
      ]
    }
  ],

  designer: [
    {
      q: "What excites you more?",
      options: [
        { text: "Colors & layouts", type: "designer" },
        { text: "Logos & posters", type: "designer" },
        { text: "Animations", type: "designer" }
      ]
    },
    {
      q: "Which tool sounds interesting?",
      options: [
        { text: "Canva", type: "designer" },
        { text: "Figma / Photoshop", type: "designer" },
        { text: "Video editing", type: "designer" }
      ]
    }
  ],

  developer: [
    {
      q: "What do you enjoy more?",
      options: [
        { text: "Solving problems", type: "developer" },
        { text: "Building apps", type: "developer" },
        { text: "Learning new tech", type: "developer" }
      ]
    },
    {
      q: "Which sounds better?",
      options: [
        { text: "Web development", type: "developer" },
        { text: "App development", type: "developer" },
        { text: "Game development", type: "developer" }
      ]
    }
  ]
};

let activeQuestions = questionSets.start;

/* START */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("startBtn").addEventListener("click", startApp);
});

function startApp() {
  userName = document.getElementById("userName").value.trim();
  if (!userName) {
    alert("Please enter your name");
    return;
  }

  document.getElementById("loginScreen").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");

  loadQuestion();
}

/* LOAD QUESTION */
function loadQuestion() {
  const q = activeQuestions[currentQuestion];
  document.getElementById("question").innerText = q.q;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt.text;
    btn.onclick = () => selectOption(opt.type);
    optionsDiv.appendChild(btn);
  });
}

/* AI DECISION */
function selectOption(type) {
  scores[type]++;

  // AI chooses path after first question
  if (currentQuestion === 0 && selectedPath === "") {
    selectedPath = type;
    activeQuestions = questionSets[type];
    currentQuestion = 0;
    loadQuestion();
    return;
  }

  currentQuestion++;

  if (currentQuestion < activeQuestions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

/* RESULT */
function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  let career = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  let html = `<h3>Hello ${userName} 👋</h3>`;

  if (career === "doctor") {
    html += `
      <h4>Doctor 🩺</h4>
      <ul>
        <li>Subjects: Biology, Chemistry, Physics</li>
        <li>Start with: NEET preparation</li>
        <li>Course: MBBS</li>
      </ul>`;
  }

  if (career === "designer") {
    html += `
      <h4>Designer 🎨</h4>
      <ul>
        <li>Start with: Canva</li>
        <li>Learn: Figma / Photoshop</li>
        <li>Build portfolio</li>
      </ul>`;
  }

  if (career === "developer") {
    html += `
      <h4>Developer 👨‍💻</h4>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>Then: Java / Python</li>
        <li>Build projects</li>
      </ul>`;
  }

  document.getElementById("finalResult").innerHTML = html;
}
