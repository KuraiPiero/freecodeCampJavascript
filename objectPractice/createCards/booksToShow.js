import Libro from "./object.js";

const nineTenEightyFour = new Libro(
  "https://images.cdn1.buscalibre.com/fit-in/360x360/ab/54/ab54a82815e061d7fc8f22bcd22f2605.jpg",
  "1984",
  "George Orwell",
  "Secker & Warburg",
  "June 8, 1949",
  "Sin iniciar",
  0
);

const Demian = new Libro(
  "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1473569870l/753010.jpg",
  "Demian",
  "Hermann Hesse",
  "Dover Publications, INC",
  "1919",
  "Sin iniciar",
  0
);
const crimeYCastigo = new Libro(
  "https://m.media-amazon.com/images/I/51fMrY8bc+L._SL500_.jpg",
  "Crimen y castigo",
  "Fyodor Dostoevsky",
  "Porrúa S.A.",
  "1866",
  "Sin iniciar"
);

const paqueteDeLibros = [nineTenEightyFour, Demian, crimeYCastigo];

export default paqueteDeLibros;
