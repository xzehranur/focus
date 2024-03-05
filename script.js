document.addEventListener("DOMContentLoaded", function () {
  const counterSpan = document.getElementById("counter");
  const button = document.querySelector(".btn");

  let count = parseInt(counterSpan.textContent);

  button.addEventListener("click", function () {
    count++;
    counterSpan.textContent = count;
  });
});

function playFireSound() {
  let audio = document.getElementById("fireAudio");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function playRainSound() {
  let audio = document.getElementById("rainAudio");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function playTsunamiSound() {
  let audio = document.getElementById("underwaterAudio");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

let fireAudio = document.getElementById("fireAudio");
let rainAudio = document.getElementById("rainAudio");
let underwaterAudio = document.getElementById("underwaterAudio");

fireAudio.addEventListener("play", function () {
  rainAudio.pause();
  underwaterAudio.pause();
});

rainAudio.addEventListener("play", function () {
  fireAudio.pause();
  underwaterAudio.pause();
});

underwaterAudio.addEventListener("play", function () {
  fireAudio.pause();
  rainAudio.pause();
});
