function solve(arr) {
    let sum = 0;
    let newArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        newArr[i] = arr[i] + arr[i + 1]
       

    }
    
    
    console.log(newArr);
}
solve([5, 0, 4, 1, 2]);