import { html } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { register } from "../api/api.js";

const registerTemplate = (onSubmit, errorMsg, isInvalidEmial, isInvalidPass, isInvalidRePass) => html` 
<div class="row space-top">
    <div class="col-md-12">
      <h1>Register New User</h1>
      <p>Please fill all fields.</p>
    </div>
  </div>
  <form @submit=${onSubmit}>
  ${errorMsg ? html`<div class="col-md-12" style="color:red">${errorMsg}</div>` : ''}
    <div class="row space-top">
      <div class="col-md-4">
        <div class="form-group">
          <label class="form-control-label" for="email">Email</label>
          <input class="form-control ${isInvalidEmial ? 'is-invalid' : 'is-valid'}" id="email" type="text" name="email" />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="password">Password</label>
          <input
            class="form-control ${isInvalidPass ? 'is-invalid' : 'is-valid'}"
            id="password"
            type="password"
            name="password"
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="rePass">Repeat</label>
          <input
            class="form-control ${isInvalidRePass ? 'is-invalid' : 'is-valid'}"
            id="rePass"
            type="password"
            name="rePass"
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Register" />
      </div>
    </div>
  </form>`;

export async function registerPage(ctx) {
  ctx.render(registerTemplate(onSubmit));

  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');


    if(email == '' || password == '' || rePass == '') {
      ctx.render(registerTemplate(onSubmit, 'All fields are required!', email == '', password == '', rePass == ''));
    }
    if(password != rePass){
      ctx.render(registerTemplate(onSubmit, 'Passwords don\'t match!', email == '', password != '', rePass != ''));
    }

    try {
      await register(email, password, rePass)
      ctx.setUserNav();
      page.redirect('/')
    } catch(err) {
     
    }


  }
}
