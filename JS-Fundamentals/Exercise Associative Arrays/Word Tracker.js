function solve(input) {
  let words = input.shift().split(" ");
  let obj = {};

  for (let word of words) {
    obj[word] = 0;
  }

  for (let ele of input) {
    if (obj.hasOwnProperty(ele)) {
      obj[ele] += 1;
    }
  }
  Object.keys(obj)
    .sort((a, b) => obj[b] - obj[a])
    .forEach((el) => {
      console.log(`${el} - ${obj[el]}`);
    });
}
solve([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "ui",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "putka",
  "is",
  "your",
  "task",
  "sentence",
  "sentence",
  "sentence",
]);
