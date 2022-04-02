class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
//display book
class UI {
    static displayBooks() {
        const books = [
            {
                title: 'Book1',
                author: 'NekiAutor',
                isbn: 123
            },
            {
                title: 'Book2',
                author: 'DrugiAutor',
                isbn: 124
            }
        ]
        books.forEach((book) => UI.addBookToList(book))
    }
    static addBookToList(book) {
        const list = document.getElementById('book-list')
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td>
        <a href="#" class="btn btn-danger btn-sm delete">X</a>
        </td>
        `
        list.appendChild(row);
    }
    static clearFields() {
        document.getElementById("title").value = " ";
        document.getElementById("author").value = " ";
        document.getElementById("isbn").value = " ";
    }
    static deleteBook(el) {
        if (el.classList.contains("delete")) {
            el.parentElement.parentElement.remove()
        }
    }
}
UI.displayBooks();



//remove book

document.querySelector("#book-list").addEventListener('click', function (e) {

    UI.deleteBook(e.target)
})


//adding a book
document.addEventListener('submit', function (e) {
    e.preventDefault()
    //value forme od usera

    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const isbn = document.querySelector("#isbn").value

    if (title === "" || author === "" || isbn === "") {
        alert("please enter all the feilds")
    } else {
        const book = new Book(title, author, isbn)
        UI.addBookToList(book)
        UI.clearFields()
    }
})
