import Book from './Book.js';

const bookTitleInput = document.querySelector('#form-title');
const bookAuthorInput = document.querySelector('#form-author');
const booksContainer = document.querySelector('.book-list');

let booksArr = [];

class UI {
  static getBooks = () => {
    const books = localStorage.getItem('books');
    if (books) {
      booksArr = JSON.parse(books);
    }
  };

  static renderBooks = () => {
    this.getBooks();
    const booksHTML = booksArr.map(
      (book) => `
      <li data-id='${book.id}'>
        <div>
        <span class="book-title">"${book.title}" by </span>
        <span class="book-title">${book.author}</span>
        </div>
        <button class="remove_book">Remove</button>
      </li>
      `,
    );
    booksContainer.innerHTML = booksHTML.join('');

    const removeButtons = document.querySelectorAll('.remove_book');
    if (removeButtons) {
      removeButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
          event.preventDefault();
          this.getBooks();
          booksArr = booksArr.filter(
            (book) => parseInt(book.id, 10)
              !== parseInt(event.target.parentNode.dataset.id, 10),
          );
          localStorage.setItem('books', JSON.stringify(booksArr));
          this.renderBooks();
        });
      });
    }
  };

  static addBook = () => {
    const addBookBtn = document.querySelector('form span.book-added-alert');
    if (
      bookTitleInput.value.length !== 0
      && bookTitleInput.value.length !== 0
    ) {
      booksArr.push(new Book(bookTitleInput.value, bookAuthorInput.value));
      localStorage.setItem('books', JSON.stringify(booksArr));
      addBookBtn.textContent = 'Book Added! Look at the book list';
      addBookBtn.classList.remove('hidden');
      setTimeout(() => {
        addBookBtn.classList.add('hidden');
      }, 5000);
    }
    this.renderBooks();
  };
}

export default UI;
