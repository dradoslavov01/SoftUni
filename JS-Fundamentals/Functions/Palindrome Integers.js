function checkPalindromeNum(arr) {
    let result ='';

    for (let el of arr) {
        el = String(el)
        let isPolindrome = 'true';
        let mid = parseInt(el.length / 2)

        for (let i = 0; i <= mid; i++) {
            if (el[i] !== el[el.length - 1 - i]){
                isPolindrome = 'false'
                break;
            }
            
        }
        result += isPolindrome + '\n';
    }
    
    return result
}
console.log(checkPalindromeNum([32,2,232,1010]));