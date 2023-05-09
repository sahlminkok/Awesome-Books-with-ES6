export default class Library {
  constructor() {
    this.books = [];
    this.loadBooks();
  }

  addBook(book) {
    this.books.push(book);
    this.saveBooks();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.saveBooks();
  }

  saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  loadBooks() {
    const books = JSON.parse(localStorage.getItem('books'));
    if (books) {
      this.books = books;
      this.displayBooks();
    }
  }

  displayBooks() {
    const bookList = document.querySelector('#book-list');
    bookList.innerHTML = '';
    for (let i = 0; i < this.books.length; i += 1) {
      const book = this.books[i];
      const li = document.createElement('li');
      li.classList.add('book');
      const pTag = document.createElement('p');
      pTag.innerHTML = `
        <span>"${book.title}"</span> by
        <span>${book.author}</span>
        `;
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Remove';
      deleteBtn.classList.add('remove');
      deleteBtn.addEventListener('click', () => {
        this.removeBook(i);
      });
      li.appendChild(pTag);
      li.appendChild(deleteBtn);
      bookList.appendChild(li);
    }
  }
}
