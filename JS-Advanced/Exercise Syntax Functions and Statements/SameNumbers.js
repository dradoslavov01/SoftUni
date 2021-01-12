function solve(num) {
  let isSame = false;
  let sum = 0;
  num = num.toString();
  for (let i = 0; i < num.length - 1; i++) {
    if (num[i] == num[i + 1]) {
      isSame = true;
    } else {
      isSame = false;
      break
    } 
  }
  for (let i of num) {
      sum += Number(i)
  }
  console.log(isSame);
  console.log(sum);
}
solve(1234);
