const container = document.querySelector(".container");
const body = document.querySelector("body");
const button = document.querySelector("btn");

document.addEventListener("mousemove", (e) => {
  if (e.clientY > 10) {
    container.style.display = "block";
    body.style.backgroundColor = "gray";
  }
});
