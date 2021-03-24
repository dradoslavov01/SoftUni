import page from "../../node_modules/page/page.mjs";
import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/api.js";

const loginTemplate = (onSubmit, errMsg, isInvalidEmail, isInvalidPass) => html` <div class="row space-top">
    <div class="col-md-12">
      <h1>Login User</h1>
      <p>Please fill all fields.</p>
    </div>
  </div>
  <form @submit=${onSubmit}>
    ${errMsg ? html`<div style="color:red" class='col-md-12'>${errMsg}</div>` : ""}
    <div class="row space-top">
      <div class="col-md-4">
        <div class="form-group">
          <label class="form-control-label" for="email">Email</label>
          <input class="form-control ${isInvalidEmail ? 'is-invalid' : 'is-valid'}"  id="email" type="text" name="email" />
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
        <input type="submit" class="btn btn-primary" value="Login" />
      </div>
    </div>
  </form>`;



export async function loginPage(ctx) {
  ctx.render(loginTemplate(onSubmit));

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");


    try {
      await login(email, password);
      ctx.setUserNav();
      page.redirect("/");
    } catch(err) {
        if(email == '' || password == '') {
            ctx.render(loginTemplate(onSubmit, 'All fields are required!', email == '', password == ''))
        } else {
            ctx.render(loginTemplate(onSubmit, 'Email or password don\'t match!', email != '', password != ''))
        }
    }
  }
}
