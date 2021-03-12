import { html, render } from './node_modules/lit-html/lit-html.js'


const selectTemplate = (list) => html `
<select id="menu">
    ${list.map(e => html`<option value=${e._id}>${e.text}</option>`)}
</select>`

const main = document.querySelector('div');
const input = document.getElementById('itemText');

getData()

async function getData() {
    document.querySelector('form').addEventListener('submit', (ev) => addItem(ev, list))

    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
    const data = await response.json();
    const list = Object.values(data);

    update(list);
}



function update(list) {
    render(selectTemplate(list), main)
}



async function addItem(ev, list) {
    ev.preventDefault();

    const item = {
        text: input.value
    }

    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    });
    const data = await response.json();
    list.push(data)

    update(list)
}