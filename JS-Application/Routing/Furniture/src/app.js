import page from '../node_modules/page/page.mjs';

import { createPage } from './views/create.js'
import { dashboardPage } from './views/dashboard.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { login } from './views/login.js';
import { myFurniture } from './views/myFurniture.js';
import { register } from './views/register.js';

import * as api from './api/api.js';

window.api = api;


page('/', dashboardPage);
page('/dashboard', dashboardPage);
page('/details/:id', detailsPage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/login', login);
page('/register', register);
page('/my-furniture', myFurniture);

page.start();
