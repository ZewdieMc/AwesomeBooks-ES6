import { navList, navAdd, navContact } from './modules/navList.js';
import UI from './modules/awesomeBooksUI.js';
import singlePageDisplay from './modules/single-page-display.js';
import renderTime from './modules/DateTimeDisplay.js';

window.onload = () => {
  UI.renderBooks();
  document.querySelector('.form-add').addEventListener('click', (event) => {
    event.preventDefault();
    UI.addBook();
  });

  renderTime();
  navList.addEventListener('click', (event) => {
    singlePageDisplay(event);
  });

  navAdd.addEventListener('click', (event) => {
    singlePageDisplay(event);
  });

  navContact.addEventListener('click', (event) => {
    singlePageDisplay(event);
  });
};