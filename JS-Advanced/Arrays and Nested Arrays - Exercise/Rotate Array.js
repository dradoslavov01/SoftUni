function solve(arr, rotations) {
  let result = arr;
  for (let i = 1; i <= rotations; i++) {
    result.push(arr.shift());
  }
  console.log(result.join(" "));
}
solve(["Banana", "Orange", "Coconut", "Apple"], 15);
