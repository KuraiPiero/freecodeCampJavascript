import show from "./console.js";

document.querySelector("title").innerHTML = "Alejo Martinez";

const headerButtons = Array.from(document.querySelectorAll(".header-item"));

headerButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonSiblins = headerButtons.filter((sibling) => sibling !== this);
    buttonSiblins.forEach(function (otherButton) {
      otherButton.classList.remove("active");
    });
    this.classList.toggle("active");
  });
});
show("asda");
