let t = 60;
const timer = document.getElementById("timer");

const interval = setInterval(() => {
  t--;
  timer.textContent = t;

  if (t <= 0) {
    clearInterval(interval);
    timer.textContent = "Ready!";
  }
}, 1000);

// Button fade animation
const btn = document.getElementById("joinBtn");
let fade = true;

setInterval(() => {
  btn.style.opacity = fade ? "0.85" : "1";
  fade = !fade;
}, 1200);

// Redirect
btn.addEventListener("click", () => {
  window.open("https://t.me/+cQUKfPbJ0sw3OGE1", "_blank");
});
