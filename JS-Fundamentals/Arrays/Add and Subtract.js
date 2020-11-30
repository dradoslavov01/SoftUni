function solve(arr) {
    
    let newArr = [];
    let arrSum = 0;
    let newArrSum = 0;
    for (let i = 0; i < arr.length; i++) {

        arrSum += arr[i];

        if(arr[i] % 2 === 0) {
           newArr.push(arr[i] + i);
        } else {
            newArr.push(arr[i] - i);
        }

        newArrSum += newArr[i];
    }
    console.log(newArr);
    console.log(arrSum);
    console.log(newArrSum);
    
}
solve([-5, 11, 3, 0, 2]);