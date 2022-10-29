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

function card(object) {
  let maingTag = document.createElement("article");
  maingTag.id = "book-card";
  document.body.appendChild(maingTag);
  for (let key in object) {
    if (key == "img") {
      let insertImg = new Image();
      insertImg.classList.add("card-img");
      insertImg.src = object.img;
      document.getElementById("book-card").appendChild(insertImg);
    } else if (key == "Title") {
      let title = document.createElement("p");
      title.classList.add("card-" + key);
      title.textContent = key + ": " + object.Title;
      document.getElementById("book-card").appendChild(title);
    } else if (key == "Author") {
      let author = document.createElement("p");
      author.classList.add("card-" + key);
      author.textContent = key + ": " + object.Author;
      document.getElementById("book-card").appendChild(author);
    } else if (key == "id") {
      let id = document.createElement("p");
      id.classList.add("card-" + key);
      id.textContent = "ISBN" + ": " + object.id;
      document.getElementById("book-card").appendChild(id);
    } else if (key == "Genres") {
      let genres = document.createElement("p");
      genres.classList.add("card-" + key);
      genres.textContent = key + ": " + object.Genres;
      document.getElementById("book-card").appendChild(genres);
    } else if (key == "Status") {
      let status = document.createElement("p");
      status.classList.add("card-" + key);
      status.textContent = key + ": " + object.Status;
      document.getElementById("book-card").appendChild(status);
    } else if (key == "CurrentPage") {
      let CurrentPage = document.createElement("p");
      CurrentPage.classList.add("card-" + key);
      CurrentPage.textContent = "Current Page" + ": " + object.CurrentPage;
      document.getElementById("book-card").appendChild(CurrentPage);
    } else if (key == "Summary") {
      let Summary = document.createElement("p");
      Summary.classList.add("card-" + key);
      Summary.textContent = key + ": " + object.Summary;
      document.getElementById("book-card").appendChild(Summary);
    }
  }
  let button = document.createElement("button");
  button.classList.add("card-button");
  button.textContent = "Start Reading";
  document.getElementById("book-card").appendChild(button);
}

card(nineteenEightyFour);
//document.body.innerHTML = content;
//document.title = nineteenEightyFour.title;
