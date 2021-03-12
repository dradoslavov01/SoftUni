import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

function renderTemplate() {
  const section = document.getElementById("allCats");

  const template = (data) => html `
    <ul>${data.map(e => listTemplate(e))}</ul>
  `

  const listTemplate = (data) => html`
      <li>
        <img src="./images/${data.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
        <button class="showBtn" @click=${onClick}>Show status code</button>
        <div class="status" style="display: none" id=${data.id}>
            <h4>Status Code: ${data.statusCode}</h4>
            <p>${data.statusMessage}</p>
        </div>
        </div>
     </li>
    
  `;
  render(template(cats), section);
}

function onClick(ev) {
    const element = ev.target.parentNode;
    const currentStyle = element.querySelector('.status').style.display;

    if(currentStyle == 'none') {
      element.querySelector('.status').style.display = 'block';
        ev.target.textContent = 'Hide status Code';
    } else {
      element.querySelector('.status').style.display= 'none';
        ev.target.textContent = 'Show status code';
    }
    console.log(ev.target.parentNode);
}

renderTemplate();
