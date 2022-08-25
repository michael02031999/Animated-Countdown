let rotatingCircle = document.getElementById("rotatingCircle");
let getReady = document.getElementById("getReady");
let go = document.getElementById("go");
let replay = document.getElementById("replay");

rotatingCircle.addEventListener("animationend", circleStop);

function circleStop() {
  rotatingCircle.classList.add("hidden");
  getReady.classList.add("hidden");
  go.style.display = "flex";
  replay.style.display = "flex";
}

replay.addEventListener("click", restartAnimation);

function restartAnimation() {
  rotatingCircle.classList.remove("hidden");
  getReady.classList.remove("hidden");
  go.style.display = "none";
  replay.style.display = "none";
}
