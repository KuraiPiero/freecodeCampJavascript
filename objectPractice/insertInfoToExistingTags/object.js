class Book {
  constructor(img, ISBN, title, author, genre, summary, status, currentPage) {
    this.img = img;
    this.ISBN = ISBN;
    this.title = title;
    this.author = author;
    this.genres = genre;
    this.summary = summary;
    this.status = status;
    this.currentPage = currentPage;
  }
  updateReadStatus(newStatus) {
    this.status = newStatus;
  }
  updateCurrentPage(newCurrentPage) {
    this.currentPage = newCurrentPage;
  }
}

export default Book;
