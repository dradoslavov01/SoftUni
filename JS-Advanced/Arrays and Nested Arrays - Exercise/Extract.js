function solve(arr) {
  const copy = arr;
  let result = [];
  const res = copy.reduce((a, b, i, array) => {
    if (b >= a) {
      result.push(b);
      a = b;
    }
    return a;
  });
  return result;
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
