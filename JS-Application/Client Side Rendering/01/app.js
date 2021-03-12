import { html, render } from './node_modules/lit-html/lit-html.js'

document.getElementById('btnLoadTowns').addEventListener('click', (e) => load(e));

function load(event) {
    event.preventDefault();
    const input = document.querySelector('input');
    const list = input.value.split(', ')

    const listTemplate = () => html`
    <ul>
      ${list.map((l) => html`<li>${l}</li>`)}
    </ul>
  `;    
    
    render(listTemplate(), document.getElementById('root'))
}

