import show from "./console.js";
import Book from "./object.js";

const nineteenEightyFour = new Book(
  "https://images.cdn1.buscalibre.com/fit-in/360x360/c9/ee/c9eef0bafc045010bfc431812ea5bbf8.jpg",
  "9780436350221",
  "Nineteen Eighty-Four",
  "George Orwell",
  [
    " Science fiction",
    " Dystopian Fiction",
    " Social science fiction",
    " Political fiction",
  ],
  "The book is set in 1984 in Oceania, one of three perpetually warring totalitarian states (the other two are Eurasia and Eastasia). Oceania is governed by the all-controlling Party, which has brainwashed the population into unthinking obedience to its leader, Big Brother.",
  "Planing to read",
  "Not started"
);

function injectContent(object) {
  for (let key in object) {
    if (key == "img") {
      document.querySelector(`.${key}`).setAttribute("src", object[key]);
    } else {
      let text = document.querySelector(`.${key}`);
      text.innerHTML = `<b>${key.toUpperCase()}</b></br> 
      ${object[key]}`;
    }
  }
}

injectContent(nineteenEightyFour);
