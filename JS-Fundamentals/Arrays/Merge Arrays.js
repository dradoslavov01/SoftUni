function solve(firtsArr, secondArr) {

    let sum = 0;
    let concat = '';
    let output = [];
        for (let i = 0; i < firtsArr.length; i++){
        for (let j = 0; j < secondArr.length; j++) {
            
            if (i == j && i % 2 == 0 && j % 2 == 0) {
                sum = Number(firtsArr[i]) + Number(secondArr[j]);
                output.push(sum);

            } else if (i == j && i % 2 != 0 && j % 2 != 0) {
                concat = firtsArr[i] + secondArr[j];
                output.push(concat);
            }
        }
    }  
    console.log(output.join(' - '));
}
solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);