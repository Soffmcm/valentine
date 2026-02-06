let current = 1;

function nextSlide() {
  document.getElementById(`slide${current}`).classList.remove("active");
  current++;
  document.getElementById(`slide${current}`).classList.add("active");
}

function wrongAnswer() {
  document.getElementById("errorText").innerText =
    "❌ Incorrect. Try again.";
}

function no() {
  document.getElementById("noText").innerText =
    "Error! Try again 😈";
}

function yes() {
  document.getElementById(`slide${current}`).classList.remove("active");
  current = 5;
  document.getElementById("slide5").classList.add("active");
  document.getElementById("yippee").play();
}
