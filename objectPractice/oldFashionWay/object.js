class Book {
  constructor(img, ISBN, title, author, genre, summary, status, currentPage) {
    this.img = img;
    this.id = ISBN;
    this.Title = title;
    this.Author = author;
    this.Genres = genre;
    this.Summary = summary;
    this.Status = status;
    this.CurrentPage = currentPage;
  }
  updateReadStatus(newStatus) {
    this.Status = newStatus;
  }
  updateCurrentPage(newCurrentPage) {
    this.CurrentPage = newCurrentPage;
  }
}

export default Book;
