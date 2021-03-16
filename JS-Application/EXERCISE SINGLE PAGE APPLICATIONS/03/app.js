import { loadBooks } from './loadBooks.js'
import { createBook } from './create.js'

document.getElementById('loadBooks').addEventListener('click', loadBooks);
document.querySelector('form').addEventListener('submit', createBook);







