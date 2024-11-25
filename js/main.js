let books = [];

function createBook() {
    const book = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        genre: document.getElementById('genre').value,
        description: document.getElementById('description').value,
    };

    if (!book.title || !book.author || !book.genre || !book.description) {
        alert('Please fill in all fields.');
        return;
    }

    books.push(book);
    alert('Book added successfully!');
    document.getElementById('book-form').reset();
    readBooks();
}

function readBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    books.forEach((book, index) => {
        bookList.innerHTML += `
            <div class="book-item">
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Genre:</strong> ${book.genre}</p>
                <p>${book.description}</p>
                <div class="action-buttons">
                    <button class="edit-btn" onclick="editBook(${index})">Edit</button>
                    <button class="delete-btn" onclick="deleteBook(${index})">Delete</button>
                </div>
            </div>
        `;
    });
}

function updateBook(index) {
    const updatedTitle = document.getElementById('title').value;
    const updatedAuthor = document.getElementById('author').value;
    const updatedGenre = document.getElementById('genre').value;
    const updatedDescription = document.getElementById('description').value;

    if (!updatedTitle || !updatedAuthor || !updatedGenre || !updatedDescription) {
        alert('Please fill in all fields.');
        return;
    }

    books[index] = {
        title: updatedTitle,
        author: updatedAuthor,
        genre: updatedGenre,
        description: updatedDescription,
    };

    alert('Book updated successfully!');
    document.getElementById('book-form').reset();
    document.getElementById('update-btn').style.display = 'none';
    document.getElementById('create-btn').style.display = 'inline';
    readBooks();
}

function deleteBook(index) {
    books.splice(index, 1);
    alert('Book deleted successfully!');
    readBooks();
}

function editBook(index) {
    const book = books[index];
    document.getElementById('title').value = book.title;
    document.getElementById('author').value = book.author;
    document.getElementById('genre').value = book.genre;
    document.getElementById('description').value = book.description;

    document.getElementById('update-btn').onclick = () => updateBook(index);
    document.getElementById('update-btn').style.display = 'inline';
    document.getElementById('create-btn').style.display = 'none';
}
