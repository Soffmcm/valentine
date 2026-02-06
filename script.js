let current = 1;

function nextSlide() {
  document.getElementById(`slide${current}`).classList.remove("active");
  current++;
  document.getElementById(`slide${current}`).classList.add("active");
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
