function passValidation(pass) {
    let otherSymbols = ['~', '@', '#', '$', '%', '^', '&', '*', '/', '?', ';', '|']
    let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    let isNum = false;
    let isSymbol = false;
    function checkLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            return false;
        }
    } 


    function chekLettersAndDigits(pass) {
        
        for (let i = 0; i < pass.length; i++) {
            for (let j = 0; j < otherSymbols.length; j++) {
                if(pass[i] == otherSymbols[j]) {
                    isSymbol = true;
                } else {
                    return true;
                }     
            }   
        }
    }
    
    function atLeastTwoDigits(pass) {
        for (let i = 0; i < numbers.length; i++) {
            if (pass.length - 1 == numbers[i] && pass.length - 2 == numbers [i]) {
                isNum = true;
            } else {
                return false;
            }
            
        }
    }

    if (checkLength(pass) === false) {
        return 'Password must be between 6 and 10 characters'
    }
    if (isSymbol === true) {
        return 'Password must consist only of letters and digits'
    }
    if (atLeastTwoDigits(pass) === false) {
        return 'Password must have at least 2 digits';
    }
    if (checkLength(pass) === true && chekLettersAndDigits(pass) === true) {
        return 'Password valid'
    }
    
}

console.log(passValidation('Pa$s$s22'));