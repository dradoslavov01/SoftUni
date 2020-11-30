function solve(inputArr) {

    let students = Number(inputArr.shift());
    let lecture = Number(inputArr.shift());
    let bonus = Number(inputArr.shift());
    let numArr = inputArr.map(Number);

    let result = numArr.map(el => el / lecture * (5 + bonus)) ;
    let maxnum = Math.max(...result);
    let maxlec = Math.max(...numArr);


    return "Max Bonus: " + Math.round(maxnum) + "." + '\n' + "The student has attended " + maxlec + " lectures."

}
console.log(solve([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]));

