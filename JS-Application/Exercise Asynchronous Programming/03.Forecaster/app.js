function attachEvents() {
    const input = document.getElementById('location');
    const button = document.getElementById('submit');
    let code = '';

    button.addEventListener('click', () => {
        if(input.value != '') {
            getCode();
            currentCondition();
        }
        
    })

    async function currentCondition() {
        const url = 'http://localhost:3030/jsonstore/forecaster/today/' + code;
        const response = await fetch(url);
        const data = await response.json();
        console.log(code);
        console.log(data);
    }
    
    async function getCode() {
        const url = 'http://localhost:3030/jsonstore/forecaster/locations';
        const response = await fetch(url);
        const data = await response.json();
        data.forEach(e => {
            if(e.name == input.value) {
                code = e.code;
            }
        });
        return code;
    }
}

attachEvents();