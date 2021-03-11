let main;
let section;
let movieId;

async function getMovieById(id) {
    const response = await fetch('http://localhost:3030/data/movies' + id);
    const movie = await response.json();

    return movie;
}

export function setupEdit(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
    
    const form = document.querySelector('form');
    form.addEventListener('submit', ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const title = formData.get('title');
        const description = formData.get('description');
        const img = formData.get('img');
    })
    

}

export async function showEdit(id) {
    main.innerHTML = '';

    const section = document.createElement('section');
    section.id = 'edit-movie';
    section.innerHTML = ` <h1>Edit Movie</h1>
    <div class="form-group">
        <label for="title">Movie Title</label>
        <input type="text" class="form-control" placeholder="${id.title}" value="${id.title}" name="title">
    </div>
    <div class="form-group">
        <label for="description">Movie Description</label>
        <textarea class="form-control" placeholder="${id.description}" name="description">${id.description}</textarea>
    </div>
    <div class="form-group">
        <label for="imageUrl">Image url</label>
        <input type="text" class="form-control" placeholder="${id.img}" value="${id.img}" name="imageUrl">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>`

    main.appendChild(section);
}