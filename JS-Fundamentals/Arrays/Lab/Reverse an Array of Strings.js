function solve(arr) {
    let output = '';
    

    for (let i = 0; i < arr.length; i++) {
        output += arr[arr.length - 1 - i] + ' ';
    }
    console.log(output);
}
solve([ 'a', 'b', 'c', 'd', 'e' ]);