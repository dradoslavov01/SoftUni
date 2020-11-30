function solve(input) {
  let inputArr = input.split(" ").map((x) => x.toLowerCase());
  let map = new Map();
  let result = " ";

  for (let i = 0; i < inputArr.length; i++) {
    let value = 0;
    for (let j = 0; j < inputArr.length; j++) {
      if (inputArr[i] == inputArr[j]) {
        value++;
        map.set(inputArr[i], value);
      }
    }
  }
  for (let ele of map) {
    if (ele[1] % 2 != 0) {
      result += ele[0] + " ";
    }
  }

  console.log(result);
}

solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
