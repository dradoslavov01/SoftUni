function solve(firstArr, secondArr) {

    let lengthNum = secondArr[0];
    let deleteNum = secondArr[1];
    let searchNum = secondArr[2];

    let take = firstArr.splice(5)
    let counter = 0;
   
    let include = firstArr.includes(searchNum);
    let search = firstArr.filter(x => x === searchNum);
    let result = search.length
    return `"Number ${searchNum} occurs ${result} times."`



}
console.log(solve([5, 2, 5, 5, 3, 4, 1, 6],
    [5, 2, 5])); 