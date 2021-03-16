import { showDetails } from "./details.js";
import { showHome } from "./home.js";

let main;
let section;
let movieId;
let movieName;


async function editMovieById(data) {

    console.log(data);
    const response = await fetch('http://localhost:3030/data/movies' + movieId, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem('authToken')
        },
        body: JSON.stringify({
            title: data.title,
            description: data.description.split('\n').map(l => l.trim()).filter(l => l != ''),
            img: data.img
        })
    });

    if(response.ok) {
        showDetails(movieId)
    }
}

const form = document.querySelector('form');
form.addEventListener('submit', ev => {
    ev.preventDefault();
    console.log('yes');
    const formData = new FormData(ev.target);
    editMovieById([...formData.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {}));
})

async function getMovieById(id) {
    const response = await fetch('http://localhost:3030/data/movies/' + id);
    const movie = await response.json();

    return movie;
}

export function setupEdit(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
    
 

}



export async function showEdit(id) {

    movieId = id;

    main.innerHTML = '';
    main.appendChild(section);


     const movie = await getMovieById(movieId);

    section.querySelector('[name="title"]').value = movie.title;
    section.querySelector('[name="description"]').value = movie.description;
    section.querySelector('[name="imageUrl"]').value = movie.imageUrl;
}