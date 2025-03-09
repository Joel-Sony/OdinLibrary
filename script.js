class Book{
    constructor(title,author,pages,read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
};

const addButton = document.querySelector(".add");
const dialog = document.getElementById("bookDialog");
const closeButton = document.getElementById("closeDialog");


addButton.addEventListener("click", function(event){
    dialog.showModal();
})

closeButton.addEventListener("click", ()=>{
    dialog.close();
})

let books = [];


document.getElementById("bookForm").addEventListener("submit", function(event){
    event.preventDefault();
    const bookName = document.getElementById("bookName").value;
    const author = document.getElementById("authorName").value;
    const pages = document.getElementById("numPages").value;
    const read = document.getElementById("readStatus").checked;

    let newBook = new Book(bookName,author,pages,read)
    books.push(newBook);
    showPopup();
    document.getElementById("bookForm").reset();
    dialog.close();
    addBookToLibrary(newBook);
})

function showPopup(){
    let popUp = document.getElementById("popupMessage");
    popUp.classList.remove("hidden");
    setTimeout(() => popUp.classList.add("hidden"), 2000);
}

function addBookToLibrary(book) {
    const bookContainer = document.createElement("div");
    bookContainer.classList.add("bookContainer");

    const bookList = document.createElement("ul");
    bookList.classList.add("bookList");

    const nameItem = document.createElement("li");
    nameItem.textContent = `📖 Name: ${book.title}`;

    const authorItem = document.createElement("li");
    authorItem.textContent = `✍️ Author: ${book.author}`;

    const pageItem = document.createElement("li");
    pageItem.textContent = `📄 Pages: ${book.pages}`;

    const readItem = document.createElement("li");
    readItem.textContent = "Read: ";

    const readCheckbox = document.createElement("input");
    readCheckbox.type = "checkbox";
    readCheckbox.checked = book.read;

    readItem.appendChild(readCheckbox);


    bookList.appendChild(nameItem);
    bookList.appendChild(authorItem);
    bookList.appendChild(pageItem);
    bookList.appendChild(readItem);

    bookContainer.appendChild(bookList);

    document.getElementById("library").appendChild(bookContainer);
}