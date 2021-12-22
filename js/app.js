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
};

// Show Alert
UI.prototype.showAlert = function (message, className) {
  // construct div
  const div = document.createElement("div");

  // Add class
  div.className = `alert ${className}`;

  // Add text
  div.appendChild(document.createTextNode(message));

  // Get parent
  const container = document.querySelector(".container");

  const form = document.querySelector("#book-form");

  container.insertBefore(div, form);

  // Timeout after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

// Delete book
UI.prototype.deleteBook = function (target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
};

// CLear fields
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

  //Validate
  if (title === "" || author === "" || isbn === "") {
    // Error alert
    ui.showAlert("please fill in all fields", "error");
  } else {
    ui.showAlert("Book Added", "success");
  }

  // Add book
  ui.addBookToList(book);

  // Clear fields
  ui.clearFields();

  e.preventDefault(e);
}

//Event listener for delete
document.getElementById("book-list").addEventListener("click", function (e) {
  const ui = new UI();

  ui.deleteBook(e.target);

  //Show message
  ui.showAlert("book removed", "success");

  e.preventDefault();
});
