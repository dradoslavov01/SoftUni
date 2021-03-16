import { loadBooks } from './loadBooks.js'

export async function createBook(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    }

    if(book.title == '' || book.author == '') {
        alert('All fields are required!')
    }
    try {
        const response = await fetch('http://localhost:3030/jsonstore/collections/books', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(book)
        });

        if (response.ok) {
            const data = await response.json();
            loadBooks();
        }
    } catch(err) {
        console.log(err.message);
    }

}