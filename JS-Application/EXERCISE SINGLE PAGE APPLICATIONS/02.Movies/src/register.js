import {showHome} from './home.js'

let main;
let section;

export function setupRegister(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    const form = section.querySelector('form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const rePass = formData.get('repeatPassword');

        if(password != rePass) {
            alert("Password don't match");
        }

        const response = await fetch('http://localhost:3030/users/register' ,{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        });
        const data = await response.json();
        if (response.status == 200) {
            sessionStorage.setItem('authToken', data.accessToken);
            sessionStorage.setItem('userId', data._id);

            [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'block');
            [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'none');
            document.getElementById('welcome-msg').textContent = `Welcome, ${email}`
            
            showHome();
        }
    })

}

export async function showRegister() {
    main.innerHTML = '';
    main.appendChild(section);
}