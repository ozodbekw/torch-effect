const flashlight = document.querySelector("#flashlight");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
  flashlight.classList.toggle("flash");
});

document.body.addEventListener("mouseover", (e) => {
//   console.log(e);
  flashlight.style.top = e.screenY + "px";
  flashlight.style.left = e.screenX + "px";
});
