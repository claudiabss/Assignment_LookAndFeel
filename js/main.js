
let books = JSON.parse(localStorage.getItem('books')) || [];

function createBook() {
    const book = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        genre: document.getElementById('genre').value,
        description: document.getElementById('description').value,
    };
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books)); // Save to localStorage
    alert('Book added successfully!');
    document.getElementById('book-form').reset();
}

function readBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    books.forEach((book, index) => {
        bookList.innerHTML += `<div>
            <h3>${book.title}</h3>
            <p>${book.author} | ${book.genre}</p>
            <p>${book.description}</p>
        </div>`;
    });
}

function updateBook() {
    alert('Update functionality not implemented in this mock.');
}

function deleteBook() {
    alert('Delete functionality not implemented in this mock.');
}
