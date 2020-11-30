function solve(arr) {

    let allTopNums = [];
    let output = '';
    let lastElement = arr[arr.length - 1]
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            allTopNums = arr[i];
            output += allTopNums + ' ';
        }
    }
    console.log(output + lastElement);
    
}
solve([27, 19, 42, 2, 13, 45, 48]);