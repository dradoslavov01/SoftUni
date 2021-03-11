import { showHome } from "./home.js";
import {e} from './dom.js'

let main;
let section;

async function getLikesMovieId(id) {
  const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
  const data = await response.json();

  return data;
}

async function getOwnLikesMovieId(id) {
  const userId = sessionStorage.getItem('userId');
  const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22`);
  const data = await response.json();

  return data;
}

async function deleteMovie(e, id) {
  e.preventDefault();
  const confirmed = confirm('Are you sure you want to delete movie?');
  if(confirmed) {
    const response = await fetch('http://localhost:3030/data/movies/' + id, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': sessionStorage.getItem('authToken')
      }
    })
    if(response.ok) {
      alert('You deleted movie!');
      showHome();
    }
  }
}

async function getMovieById(id) {
  const response = await fetch("http://localhost:3030/data/movies/" + id);
  const data = await response.json();

  return data;
}

function createMovieCard(movie, likes, ownLike) {

  const userId = sessionStorage.getItem('userId');
  const controls = e('div', {className: 'col-md-4 text-center'},
      e('h3', {className: 'my-3'}, 'Movie description'),
      e('p', {}, movie.description));
  

  if(userId != null) {
    if(userId == movie._ownerId) {
      controls.appendChild(e('a', {className: 'btn btn-danger', href: '#', onclick: (e) => deleteMovie(e, movie._id)}, 'Delete'));
      controls.appendChild(e('a', {className: 'btn btn-warning', href: '#'}, 'Edit'));
    } 
      controls.appendChild(e('a', {className: 'btn btn-primary', href: '#', onclick: likeMovie}, 'Like'));
    
    
  }

  const likeSpan = e('span', {className: 'enrolled-span'}, likes + ' like' + (likes == 1 ? '' : 's'));
  controls.appendChild(likeSpan);

 
  
  const element = document.createElement("div");
  element.className = "container";
  element.appendChild(e('div', {className: 'row bg-light text-dark'}, 
  e('h1', {}, `Movie title: ${movie.title}`),
  e('div', {className: 'col-md-8'}, 
  e('img', {className: 'img-thumbnail', src: movie.img})),
    controls
  ));

  return element;

  async function likeMovie(event) {
    const response = await fetch('http://localhost:3030/data/likes', {
      method: 'post',
      headers: { 
        'Content-Type': 'application/json',
        'X-Authorization': sessionStorage.getItem('authToken')
    },
      body: JSON.stringify({movieId: movie._id})
    })
    if(response.ok) {
      event.target.remove();
    }
  }
}

export function setupDetails(mainTarget, sectionTarget) {
  main = mainTarget;
  section = sectionTarget;
}

export async function showDetails(id) {
  section.innerHTML = "";
  main.innerHTML = "";
  main.appendChild(section);

 const [movie, likes, ownLike] = await Promise.all([
   getMovieById(id),
   getLikesMovieId(id),
   getOwnLikesMovieId(id)
 ])
  const card = createMovieCard(movie, likes, ownLike);
  section.appendChild(card);
}
