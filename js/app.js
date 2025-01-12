const flashlight = document.querySelector("#flashlight");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
  flashlight.classList.toggle("flash");
  if (flashlight.classList.contains("flash")) {
    button.textContent = "Chiroqni o'chirish";
  } else {
    button.textContent = "Chiroqni yoqish";
  }
});

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  flashlight.style.left = `${mouseX - 145}px`;
  flashlight.style.top = `${mouseY - 145}px`;
});
