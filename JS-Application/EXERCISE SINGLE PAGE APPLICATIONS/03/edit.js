import { html, render } from './node_modules/lit-html/lit-html.js';
import { update } from './loadBooks.js'

async function editBook(event, id) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    }

    try{
        const response = await fetch('http://localhost:3030/jsonstore/collections/books/' + id,{
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(book)
        });
        
        if(response.status == 200) {
            const data = await response.json();
        }
    } catch(err) {
        console.log(err.message);
    }
}