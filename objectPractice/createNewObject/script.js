import show from "./console.js";
import Cup from "./object.js";

const coffeCup = new Cup(
  "coffe-cup",
  "white with coffe patterns",
  "450ml",
  [" microwave safe", " dishwasher safe", " oven safe"],
  "https://media.nisbets.com/asset/core/prodimage/large_new/gk075_new22-4974.jpg"
);

function createTags(object, prop, value) {
  for (let key in object) {
    if (key == "name") {
      let title = document.createElement("h3");
      title.id = "title";
      title.textContent = object.name;
      document.body.appendChild(title);
    } else if (key == "color") {
      let color = document.createElement("p");
      color.id = key;
      color.textContent = "The color of this product is: " + object.color;
      document.body.appendChild(color);
    } else if (key == "volume") {
      let volume = document.createElement("p");
      volume.id = key;
      volume.textContent = "Volume: " + object.volume;
      document.body.appendChild(volume);
    } else if (key == "features") {
      let features = document.createElement("p");
      features.id = key;
      features.textContent = "Volume: " + object.features;
      document.body.appendChild(features);
    }
  }
}

createTags(coffeCup);
createTags(coffeCup.createImage());

//how to iterate a object in javascript?
