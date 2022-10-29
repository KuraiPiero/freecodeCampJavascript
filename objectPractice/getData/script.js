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

let card = `
<section class="book-card">
    <h4 class="card-title"><b>${nineteenEightyFour.title}</b></h4>
    <figure class="card-img">
        <img class="img" src="${nineteenEightyFour.img}" />
        <figcaption class="img-caption"></figcaption>
    </figure>
    <p class="author"><b>Author:</b> ${nineteenEightyFour.author}</p>
    <p class="genres"><b>Genres:</b><small> ${nineteenEightyFour.genres}</small></p>    
    <p class="ISBN"><b>ISBN:</b> ${nineteenEightyFour.id}</p>
    <p class="summary"><small>${nineteenEightyFour.summary}</small></p>
    <p class="status"><b>Status:</b> ${nineteenEightyFour.status}</p>
    <p class="currentPage"><b>Current Page:</b> ${nineteenEightyFour.currentPage}</p>
    <button src="#" class="button">Start Reading</button>
    
</section>  
`;
document.body.innerHTML = card;
document.title = nineteenEightyFour.title;
