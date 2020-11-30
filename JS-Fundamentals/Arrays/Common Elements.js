function solve(firstArr, secondArr) {

    let common = '';

    for (let i = 0; i < firstArr.length; i++){
        for (let j = 0; j < secondArr.length; j++) {
            
            if (firstArr[i] === secondArr[j]) {
                common += secondArr[j] + "\n";
            }
        }
    }
    console.log(common);

}
solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l'])