import { setupHome, showHome } from "./home.js";
import { setupDetails } from "./details.js";
import { setupLogin, showLogin } from "./login.js";
import { setupRegister, showRegister } from "./register.js";
import { setupCreate, showCreate } from "./create.js";
import { setupEdit } from "./edit.js";
 

  const links = {
    homeLink: showHome,
    loginLink: showLogin,
    registerLink: showRegister,
    createLink: showCreate,
    logoutBtn: logout,
  };
  
  const main = document.querySelector("main");
  
  setupSection("home-page", setupHome);
  setupSection("add-movie", setupCreate);
  setupSection("movie-details", setupDetails);
  setupSection("edit-movie", setupEdit);
  setupSection("form-login", setupLogin);
  setupSection("form-sign-up", setupRegister);

  
  function setUserNav() {
    if (sessionStorage.getItem('authToken') == null) {
      [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'none');
      [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'block');
    } else {
      [...document.querySelectorAll('nav .user')].forEach(l => l.style.display = 'block');
      [...document.querySelectorAll('nav .guest')].forEach(l => l.style.display = 'none');
      const email = sessionStorage.getItem('email');
      document.getElementById('welcome-msg').textContent = `Welcome, ${email}`
    }
}



async function logout() {
    const response = await fetch('http://localhost:3030/users/logout', {
      method: 'get',
      headers: {'X-Authorization': sessionStorage.getItem('authToken')}
    })

    if(response.status == 200) {
      sessionStorage.clear()
      setUserNav();
      showHome();
    }
  
}
  
  
  function setupSection(sectionId, setup) {
    const section = document.getElementById(sectionId);
    setup(main, section);
  }
  
  function setupNavigation() {
    document.querySelector("nav").addEventListener("click", (event) => {
      const view = links[event.target.id];
      if (typeof view == "function") {
          event.preventDefault();
        view();
      }
    });
    document.getElementById('createLink').addEventListener('click', (event) => {
        event.preventDefault();
        showCreate();
    });
  }


  setupNavigation();
  showHome(); 
  setUserNav();


  

