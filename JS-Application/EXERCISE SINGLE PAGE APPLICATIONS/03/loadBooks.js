import {html, render} from './node_modules/lit-html/lit-html.js';

const main = document.querySelector('tbody');

const rowTemplate = (data) => html `
${data.map(e => html `<tr>
    <td>${e.title}</td>
    <td>${e.author}</td>
    <td>
        <button @click=${render(editFormTemplate(), form)}>Edit</button>
        <button>Delete</button>
    </td>
</tr>`)}`

const form = document.querySelector('form');

const editFormTemplate = () => html `
<form>
    <h3>Edit FORM</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <button>Save</button>
</form>`


function update(data) {
    render(rowTemplate(data), main)
}

export async function loadBooks() {
    try{
        const response = await fetch('http://localhost:3030/jsonstore/collections/books');
        if(response.status == 200){
            const data = await response.json();
            const books = Object.values(data);

            update(books)
        } 
    } catch(error) {
        console.log(error.message);
    }
}