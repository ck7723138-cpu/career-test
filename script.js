let currentQuestion = 0;
let score = {
  tech: 0,
  medical: 0,
  business: 0,
  arts: 0
};

const questions = [
  {
    q: "Which subject do you like most?",
    options: [
      { text: "Computer / Coding", type: "tech" },
      { text: "Biology", type: "medical" },
      { text: "Accounts / Money", type: "business" },
      { text: "Drawing / Creativity", type: "arts" }
    ]
  },
  {
    q: "What kind of work do you prefer?",
    options: [
      { text: "Problem Solving", type: "tech" },
      { text: "Helping patients", type: "medical" },
      { text: "Managing people", type: "business" },
      { text: "Creative work", type: "arts" }
    ]
  },
  {
    q: "Your strength is?",
    options: [
      { text: "Logic & Thinking", type: "tech" },
      { text: "Care & Patience", type: "medical" },
      { text: "Leadership", type: "business" },
      { text: "Imagination", type: "arts" }
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

  q.options.forEach(opt => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = opt.text;
    div.onclick = () => selectOption(opt.type);
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

  let resultText = "";

  if (bestCareer === "tech") {
    resultText = "Best Career Path: Software Developer, AI Engineer, Data Analyst";
  } else if (bestCareer === "medical") {
    resultText = "Best Career Path: Doctor, Nurse, Medical Technician";
  } else if (bestCareer === "business") {
    resultText = "Best Career Path: Entrepreneur, Manager, Marketing Expert";
  } else {
    resultText = "Best Career Path: Designer, Animator, Content Creator";
  }

  document.getElementById("finalResult").innerText = resultText;
}
