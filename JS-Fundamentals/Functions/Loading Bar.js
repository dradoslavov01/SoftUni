function loadingBar(number) {

    let isLoading = false;
    let result = '';

    for(let i = 0; i <= number; i++) {
        if (i % 10 == 0 && i >= 10) {
            result += '%'
        }
        if (number === 100){
            isLoading = false;
        }
    } 
    for (let i = number; i < 100; i++) {
        if(i % 10 == 0){
            result += '.'
            isLoading = true;
        }
    }

    if(isLoading) {
        return `[${result}]` + '\n' + 'Still loading...'
    } else {
        return '100% Complete!' + '\n' + `[${result}]`
    }
    
    
}
console.log(loadingBar(70));