function solve(arr, rotatitons) {

    let newArr = arr;
    for (let i = 1; i <= rotatitons; i++) {
        newArr.push(arr.shift());
    }
    console.log(newArr.join(' '));

}
solve([2, 4, 15, 31], 5);