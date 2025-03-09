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
    console.log(books);
    showPopup();
    dialog.close();
})

function showPopup(){
    let popUp = document.getElementById("popupMessage");
    popUp.classList.remove("hidden");
    setTimeout(() => popUp.classList.add("hidden"), 2000);
}

