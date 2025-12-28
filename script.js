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

  let html = `<h3>Hello ${userName}</h3>`;

  if (career === "doctor") {
    html += `
      <p><b>Career:</b> Doctor 🩺</p>
      <ul>
        <li>Subjects: Biology, Chemistry, Physics</li>
        <li>Start: NEET preparation</li>
        <li>Course: MBBS</li>
      </ul>`;
  }

  if (career === "designer") {
    html += `
      <p><b>Career:</b> Designer 🎨</p>
      <ul>
        <li>Start with Canva</li>
        <li>Learn Figma / Photoshop</li>
        <li>Build Portfolio</li>
      </ul>`;
  }

  if (career === "developer") {
    html += `
      <p><b>Career:</b> Developer 👨‍💻</p>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>Then Java / Python</li>
        <li>Build Projects</li>
      </ul>`;
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
}
