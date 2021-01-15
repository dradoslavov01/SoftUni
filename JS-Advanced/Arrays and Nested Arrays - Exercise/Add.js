function solve(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "add") {
      array.push(i + 1);
    } else {
      array.pop();
    }
  }
  if (array.length > 0) {
    console.log(array.join('\n'));
  } else {
    console.log('Empty');
  }
}
solve(["add", "add", "add", "add"]);
solve(["remove", "remove", "remove"]);
