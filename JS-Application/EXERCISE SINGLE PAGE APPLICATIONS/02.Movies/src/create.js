import {showDetails} from './details.js'
import { showHome } from './home.js';

let main;
let section;

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const movie = {
        title: formData.get('title'),
        description: formData.get('description'),
        img: formData.get('imageUrl')
    }

    if(movie.title == '' || movie.description == '' || movie.img == '') {
        alert('All fields are required!')
    }

    const response = await fetch('http://localhost:3030/data/movies', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem('authToken')
        },
        body: JSON.stringify(movie)
    });
    
    if(response.ok) {
        const movie = await response.json();
        showDetails(movie._id)
    } else {
        alert('You must be logged in to be able to add movie!')
    }
    showHome();

}

export function setupCreate(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
    const form = document.querySelector('form');
    form.addEventListener('submit', onSubmit);
}

export async function showCreate() {
    main.innerHTML = '';
    main.appendChild(section);
}