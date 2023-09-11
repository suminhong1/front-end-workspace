const asideIcon = document.querySelector("#aside-icon");
const main = document.querySelector("main");

asideIcon.addEventListener("click", function () {
  main.classList.toggle("aside-change");
});
