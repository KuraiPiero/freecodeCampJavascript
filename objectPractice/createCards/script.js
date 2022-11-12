import paqueteDeLibros from "./booksToShow.js";
import show from "./console.js";
import Libro from "./object.js";

document.querySelector("title").innerHTML = "Practica - forEach";

function crearCarta(objects) {
  let cartaLibro = document.createElement("section");
  cartaLibro.setAttribute("class", "carta-libro");
  document.querySelector(".contenido-principal").append(cartaLibro);
  for (let key in objects) {
    for (let item in objects[key]) {
      let propertie = objects[key][item];
      if (item == "portada") {
        let img = document.createElement("img");
        img.setAttribute("class", item + "-libro");
        img.setAttribute("src", propertie);
        document.querySelector(".carta-libro").appendChild(img);
      } else {
        let seccion = document.createElement("p");
        seccion.setAttribute("class", item + "-libro");
        seccion.innerHTML = `<b>${
          item.charAt(0).toUpperCase() + item.slice(1)
        }:</b>${propertie} `;

        document.querySelector(".carta-libro").appendChild(seccion);
      }
    }
  }
}

crearCarta(paqueteDeLibros);

show(paqueteDeLibros);
