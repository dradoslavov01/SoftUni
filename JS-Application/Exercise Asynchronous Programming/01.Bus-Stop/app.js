async function getInfo() {
    const input = document.querySelector('#stopId');
    
    const url = 'http://localhost:3030/jsonstore/bus/businfo/' + input.value;
    try {
        const response = await fetch(url);
        const data = await response.json();

        const stopName = document.getElementById('stopName');
        const ul = document.getElementById('buses');
        ul.innerHTML = '';
        Object.keys(data.buses).forEach(k => {
            const li = e('li', `Bus ${k} arrives in ${data.buses[k]} minutes`);
            ul.appendChild(li)    
        });

        input.value = '';
    
    } catch (err) {
        alert(err.message);
    }

    function e(type, content) {
        const element = document.createElement(type);
        element.textContent = content;
        return element
    }
    
    
}