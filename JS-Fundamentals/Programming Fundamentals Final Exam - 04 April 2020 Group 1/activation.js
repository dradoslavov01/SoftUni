function solve(input) {
  let actions = {
    Contains(rawKey, substring) {
      if (rawKey.includes(substring)) {
        console.log(`${rawKey} contains ${substring}`);
      } else {
        console.log("Substring not found!");
      }
      return rawKey;
    },
    Flip(rawKey, mode, start, end) {
      start = Number(start);
      end = Number(end);
      let first = rawKey.substring(0, start);
      let second = rawKey.substring(start, end);
      let third = rawKey.substring(end, rawKey.length);

      if (mode == "Upper") {
        second = second.toLocaleUpperCase();
      } else if (mode == "Lower") {
        second = second.toLocaleLowerCase();
      }
      let result = first + second + third;
      console.log(result);
      return result;
    },
    Slice(rawKey, start, end) {
      start = Number(start);
      end = Number(end);
      let first = rawKey.substring(0, start);
      let second = rawKey.substring(start, end);
      let third = rawKey.substring(end, rawKey.length);
      let result = first + third;
      console.log(result);
      return result;
    },
  };
  let rawKey = input.shift();
  let line;

  while ((line = input.shift()) != "Generate") {
    let [actionsName, ...params] = line.split(">>>");
    let action = actions[actionsName];
    rawKey = action(rawKey, ...params);
  }
  console.log(`Your activation key is: ${rawKey}`);
}

solve([
  "134softsf5ftuni2020rockz42",
  "Slice>>>3>>>7",
  "Contains>>>-rock",
  "Contains>>>-uni-",
  "Contains>>>-rocks",
  "Flip>>>Upper>>>2>>>8",
  "Flip>>>Lower>>>5>>>11",
  "Generate",
]);
