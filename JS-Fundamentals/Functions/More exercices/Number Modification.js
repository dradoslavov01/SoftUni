function modification(num) {
    num = String(num)
    num = num.split('')
    let sum = 0;
    for(let i = 0; i < num.length; i++) {
        sum += Number(num[i])
        if(sum / i <= 5) {
            num.push(9)
        }
    }
    return num.join('')
}
console.log(modification(5835));