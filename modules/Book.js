class Book {
  constructor(title, author) {
    this.id = Math.floor(Math.random() * 10000);
    this.author = author;
    this.title = title;
  }
}

export default Book;