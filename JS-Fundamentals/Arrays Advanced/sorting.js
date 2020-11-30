function sort(array) {

    array.sort((a, b) => a - b);

    for (let i = 0; i < array.length; i+=2) {
        array.splice(i, 0, array.pop())  
    }
    return array

}
console.log(sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]));