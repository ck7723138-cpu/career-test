let currentQuestion = 0;

let score = {
  tech: 0,
  medical: 0,
  business: 0,
  arts: 0
};

const questions = [
  {
    q: "Which subject do you like the most?",
    options: [
      { text: "Computer / Coding", type: "tech" },
      { text: "Biology", type: "medical" },
      { text: "Accounts / Money", type: "business" },
      { text: "Drawing / Creativity", type: "arts" }
    ]
  },
  {
    q: "What kind of work do you enjoy?",
    options: [
      { text: "Solving problems", type: "tech" },
      { text: "Helping sick people", type: "medical" },
      { text: "Managing people", type: "business" },
      { text: "Creative designing", type: "arts" }
    ]
  },
  {
    q: "Which skill matches you the most?",
    options: [
      { text: "Logic & Thinking", type: "tech" },
      { text: "Care & Patience", type: "medical" },
      { text: "Leadership", type: "business" },
      { text: "Imagination", type: "arts" }
    ]
  },
  {
    q: "What is your future goal?",
    options: [
      { text: "Build apps / websites", type: "tech" },
      { text: "Become a doctor", type: "medical" },
      { text: "Run a business", type: "business" },
      { text: "Become a designer", type: "arts" }
    ]
  }
];

function startTest() {
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  loadQuestion();
}

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.q;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = option.text;
    div.onclick = () => selectOption(option.type);
    optionsDiv.appendChild(div);
  });
}

function selectOption(type) {
  score[type]++;
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

  let bestCareer = Object.keys(score).reduce((a, b) =>
    score[a] > score[b] ? a : b
  );

  let resultHTML = "";

  if (bestCareer === "tech") {
    resultHTML = `
      <h3>Career: Software Developer 👨‍💻</h3>
      <p><b>Subjects needed:</b> Maths, Computer Science</p>
      <p><b>How to start:</b></p>
      <ul>
        <li>Learn HTML, CSS (Web basics)</li>
        <li>Learn JavaScript (Logic)</li>
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
