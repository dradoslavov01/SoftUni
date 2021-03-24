import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";

import { dashboardPage } from "./views/dashboard.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { myFurniturePage } from "./views/my-furniture.js";
import { createPage } from "./views/create.js";

import * as api from "./api/data.js";



window.api = api;

const main = document.querySelector(".container");
document.getElementById('logoutBtn').addEventListener('click', logout);

page('/', renderMiddlewear, dashboardPage);
page('/dashboard', renderMiddlewear, dashboardPage);
page('/login', renderMiddlewear, loginPage);
page('/register', renderMiddlewear, registerPage);
page('/details/:id', renderMiddlewear, detailsPage);
page('/edit/:id', renderMiddlewear, editPage);
page('/my-furniture', renderMiddlewear, myFurniturePage);
page('/create', renderMiddlewear, createPage);

setUserNav();

page.start();

function renderMiddlewear(ctx, next) {
  ctx.render = (content) => render(content, main);
  ctx.setUserNav = setUserNav;
  next();
}

function setUserNav() {
    const token = sessionStorage.getItem('authToken');

    if(token != null) {
        [...document.querySelectorAll('#guest')].forEach(e => e.style.display = 'none');
        [...document.querySelectorAll('#user')].forEach(e => e.style.display = 'inline-block');
    } else {
        [...document.querySelectorAll('#guest')].forEach(e => e.style.display = 'inline-block');
        [...document.querySelectorAll('#user')].forEach(e => e.style.display = 'none');
    }
}


async function logout() {
    await api.logout();
    setUserNav();
    page.redirect('/');
}