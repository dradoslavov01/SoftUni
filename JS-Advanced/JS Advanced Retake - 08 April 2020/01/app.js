function solve() {
    const taskInput = document.getElementById('task');
    const descArea = document.getElementById('description');
    const dateInput = document.getElementById('date');

    document.getElementById('add').addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON') {
            e.preventDefault();
            if(taskInput.value == '' || descArea.value == '' || dateInput.value == '') {
                return;
            }
            const openDiv = document.querySelector('h1[class="orange"]').parentNode.parentNode.children[1];
            const article = document.createElement('article');
            openDiv.appendChild(article);
            article.appendChild(createElement('h3', taskInput.value));
            article.appendChild(createElement('p', `Description: ${descArea.value}`));
            article.appendChild(createElement('p', `Due Date: ${dateInput.value}`));
            const flexDiv = article.appendChild(createElement('div', undefined, 'flex'));
            flexDiv.appendChild(createElement('button', 'Start', 'green')).addEventListener('click', (e) => {
                if(e.target.tagName === 'BUTTON') {
                    e.preventDefault();
                    const openDiv = document.querySelector('h1[class="yellow"]').parentNode.parentNode.children[1];
                const article = document.createElement('article');
                openDiv.appendChild(article);
                article.appendChild(createElement('h3', taskInput.value));
                article.appendChild(createElement('p', `Description: ${descArea.value}`));
                article.appendChild(createElement('p', `Due Date: ${dateInput.value}`));
                const flexDiv = article.appendChild(createElement('div', undefined, 'flex'));
                flexDiv.appendChild(createElement('button', 'Delete', 'red'))
                flexDiv.appendChild(createElement('button', 'Finish', 'orange'));
                    
            }});
            flexDiv.appendChild(createElement('button', 'Delete', 'red'));
            
           
        }
    })


    function createElement(type, content, className) {
        const element = document.createElement(type);
            element.textContent = content;
        if(className) {
            element.className = className;
        }
        return element
    }
}