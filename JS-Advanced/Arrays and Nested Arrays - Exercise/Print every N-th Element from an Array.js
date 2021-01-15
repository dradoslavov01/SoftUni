function solve(arr, num) {
  let array = [];
  for (let i = 0; i < arr.length; i += num) {
    array.push(arr[i]);
  }
  return array
}

console.log(solve(["5", "20", "31", "4", "20"], 2));
