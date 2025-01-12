const flashlight = document.querySelector("#flashlight");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
  flashlight.classList.toggle("flash");
});

// flashlight.style.transform = "translate(-50%, -50%)";
document.body.addEventListener("mouseover", (e) => {
  flashlight.style.top = e.clientY + "px";
  flashlight.style.left = e.clientX + "px";
});
