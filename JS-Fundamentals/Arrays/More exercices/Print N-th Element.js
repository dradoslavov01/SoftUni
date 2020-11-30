function solve(array) {
    let N = Number(array[array.length - 1]);
    let newArr = [];

    newArr.push(array[0])
    array.pop();
    for (let i = 0; i < N; i++) {
        newArr.push(array[i + N])
    }
    let result = newArr.filter(Boolean)
    console.log(result);
   

}
solve(['5', '20', '31', '4', '20', '2']);