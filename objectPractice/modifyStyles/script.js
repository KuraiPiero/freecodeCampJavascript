import show from "./console.js";
document.querySelector("title").innerHTML = "Practica - funciones";

const modifier = (text) => {
  let paragraph = document.createElement("p");
  paragraph.setAttribute("class", "newItem");
  paragraph.innerHTML = text;
  document.body.appendChild(paragraph);
};

function anotherModifier(color, weight, size, text) {
  let elem = document.querySelector(".newItem").style;
  elem.color = color;
  elem.fontWeight = weight;
  elem.fontSize = size;
  document.querySelector(".newItem").innerHTML += text;
}

modifier("its created");
anotherModifier("purple", 900, "3em", " </br> This is a new line");
