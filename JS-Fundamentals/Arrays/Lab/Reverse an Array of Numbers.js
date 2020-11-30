function solve(n, arr) {
    let output = '';
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr[i] = arr[i];
    }
    
    for (let i = n - 1; i >= 0; i--) {
        output += newArr[i] + ' ';
    }
   
    console.log(output);
}
solve(3, [10, 20, 30, 40, 50]);