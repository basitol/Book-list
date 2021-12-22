//Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UI() {}

UI.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list");
  // Create tr element
  const row = document.createElement("tr");

  // Insert columns
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href = "#" class = "delete">X</a></td>
  `;

  list.appendChild(row);

  console.log(row);
};

UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// Event-listeners

const bookForm = document
  .querySelector("#book-form")
  .addEventListener("submit", submitForm);

function submitForm(e) {
  // Get form values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // Instantiating new book
  const book = new Book(title, author, isbn);

  // Instantiating UI
  const ui = new UI();

  // Add book
  ui.addBookToList(book);

  // Clear fields
  ui.clearFields();

  e.preventDefault(e);
}
