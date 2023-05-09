import Library from './modules/library.js';
import Book from './modules/book.js';
import { DateTime } from './modules/luxon.js';

const library = new Library();

const addBookForm = document.querySelector('#add-book-form');
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleInput = document.querySelector('#title');
  const authorInput = document.querySelector('#author');
  const book = new Book(titleInput.value, authorInput.value);
  library.addBook(book);
  titleInput.value = '';
  authorInput.value = '';
});

const list = document.querySelector('#list');
const addNew = document.querySelector('#addNew');
const contact = document.querySelector('#contact');
const listBtn = document.querySelector('#list-btn');
const addNewBtn = document.querySelector('#addNew-btn');
const contactBtn = document.querySelector('#contact-btn');

list.classList.remove('hidden');
addNew.classList.add('hidden');
contact.classList.add('hidden');

listBtn.addEventListener('click', () => {
  addNew.classList.add('hidden');
  contact.classList.add('hidden');
  list.classList.remove('hidden');
});

addNewBtn.addEventListener('click', () => {
  list.classList.add('hidden');
  addNew.classList.remove('hidden');
  contact.classList.add('hidden');
});

contactBtn.addEventListener('click', () => {
  list.classList.add('hidden');
  contact.classList.remove('hidden');
  addNew.classList.add('hidden');
});

const now = DateTime.now().toFormat('MMMM d, yyyy \'at\' h:mm a');

document.querySelector('.time').innerHTML = now;
