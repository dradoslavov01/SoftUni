import { html, render } from './node_modules/lit-html/lit-html.js'

const template = (list, select) => html `
<thead>
            <tr>
                <th>Student name</th>
                <th>Student email</th>
                <th>Student course</th>
            </tr>
        </thead>
        <tbody>
         ${list.map(x => html `
         <tr class=${select ? 'select' : ''}>
            <td>${x.firstName} ${x.lastName}</td>
            <td>${x.email}</td>
            <td>${x.course}</td>
         </tr>`)}    
      </tbody>

        <tfoot>
            <tr>
                <td colspan="3">
                    <input type="text" id="searchField" />
                    <button type="button" id="searchBtn">Search</button>
                </td>
            </tr>
        </tfoot>`

   const input = document.getElementById('searchField');
   const main = document.querySelector('.container');
   const endpoint = 'http://localhost:3030/jsonstore/advanced/table';

   getData();
   
   async function getData() {

      document.getElementById('searchBtn').addEventListener('click', () => {
         update(list, input.value);
      });
      

      const response = await fetch(endpoint);
      const data = await response.json();
      const list = Object.values(data);

      update(list);

   } 

   function update(list, match = '') {
      const result = list.map(e => template(e, onClick(e, match)))
      render(result, main)
   }


   function onClick(list, match) {
      Object.values(list).some(v => match && v.toLowerCase().icludes(match.toLowerCase()))
   }
