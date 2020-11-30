function solve(input) {
  let obj = {};

  for (let i = 0; i < input.length; i++) {
    if (i % 2 == 0) {
      obj[input[i]] = 0;
    }
  }

  for (let i = 0; i < input.length; i++) {
    if (obj.hasOwnProperty(input[i])) {
      obj[input[i]] += +input[i + 1];
    }
  }

  for (const key in obj) {
    console.log(`${key} -> ${obj[key]}`);
  }
}
solve(["Gold", "155", "Silver", "10", "Copper", "17"]);
