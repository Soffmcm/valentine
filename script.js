let current = 1;

function nextSlide() {
  document.getElementById(`slide${current}`).classList.remove("active");
  current++;
  document.getElementById(`slide${current}`).classList.add("active");

  if (current === 2) {
    loadQuestion();
  }
}


const questions = [
  {
    text: "Who loves who more?",
    answers: [
      { text: "You love me more", correct: false },
      { text: "I love you more", correct: true }
    ]
  },
  {
    text: "Who's stronger",
    answers: [
      { text: "You", correct: false },
      { text: "Me", correct: true }
    ]
  },
  {
    text: "Who’s cuter?",
    answers: [
      { text: "You", correct: true },
      { text: "Me", correct: false}
    ]
  },
   {
    text: "Who’s tougher, taller, cooler, and more non-chalante?",
    answers: [
      { text: "You", correct: false },
      { text: "Me", correct: true}
    ]
  }
];

let questionIndex = 0;


function loadQuestion() {
  document.getElementById("questionText").innerText =
    questions[questionIndex].text;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  document.getElementById("errorText").innerText = "";

  questions[questionIndex].answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer.text;

    btn.onclick = () => {
      if (answer.correct) {
        questionIndex++;
        if (questionIndex < questions.length) {
          loadQuestion();
        } else {
          nextSlide();
        }
      } else {
        document.getElementById("errorText").innerText =
          "Wrong. Try again.";
      }
    };

    answersDiv.appendChild(btn);
  });
}

function wrongAnswer() {
  document.getElementById("errorText").innerText =
    "Incorrect. Try again.";
}

function no() {
  document.getElementById("noText").innerText =
    "Error! Try again.";
}

function yes() {
  document.getElementById(`slide${current}`).classList.remove("active");
  current = 6;
  document.getElementById("slide6").classList.add("active");
  
  const video = document.getElementById("yippieVideo");
  video.play();
}
