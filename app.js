const addBookBtn = document.querySelector("#add-book-btn");
const formEl = document.querySelector(".add-book-form");
const mainBoardEl = document.querySelector(".main-board");
const deleteIcon = document.querySelector(".delete-icon");

let myLibrary = [];

function Books(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const isRead = document.querySelector("#isRead").checked;
  const book = new Books(title, author, pages, isRead);

  myLibrary.push(book);
}

function renderOne() {
  const bookEl = document.createElement("div");
  mainBoardEl.appendChild(bookEl);
  for (i = 0; i < myLibrary.length; i++) {
    bookEl.classList.add("book-item");
    let book = myLibrary[i];
    bookEl.innerHTML = `<h4 class="book-title">${book.title}</h4>
    <p class="book-author">${book.author}</p>
    <p class="no-of-pages">${book.pages}</p>
    <p class="read-status">${book.isRead ? "Read" : "Not read yet"}</p> 
    <input type="checkbox" checked id="isRead">
    <i class="fa-regular fa-trash-can delete-icon" onclick = "deleteBtn(${i})"></i>`;
    console.log(myLibrary);
  }
}

function renderAll() {
  mainBoardEl.innerHTML = "";
  for (i = 0; i < myLibrary.length; i++) {
    const bookEl = document.createElement("div");
    mainBoardEl.appendChild(bookEl);
    bookEl.classList.add("book-item");
    let book = myLibrary[i];
    bookEl.innerHTML = `<h4 class="book-title">${book.title}</h4>
    <p class="book-author">${book.author}</p>
    <p class="no-of-pages">${book.pages}</p>
    <button onclick = "toggleRead(${i})"
    style="background-color:${book.isRead ? "green" : "red"};"
    >${book.isRead ? "Read" : "Not read yet"}</button>
    <i class="fa-regular fa-trash-can delete-icon" onclick = "deleteBtn(${i})"></i>`;
  }
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  addBookToLibrary();
  renderAll();
});

function deleteBtn(index) {
  myLibrary.splice(index, 1);
  renderAll();
}

function toggleRead(index) {
  myLibrary[index].isRead = !myLibrary[index].isRead;
  renderAll();
}
