function solve(input) {
  let actions = {
    Contains(rawKey, substr) {
      if (rawKey.includes(substr)) {
        console.log(`${rawKey} contains ${substr}.`);
      } else {
        console.log("Substring not found!");
      }
      return rawKey;
    },
    Flip(rawKey, mode, start, end) {
      [start, end] = [Number(start), Number(end)]
      let first = rawKey.substring(0, start);
      let second = rawKey.substring(start, end);
      let third = rawKey.substring(end);
 
      if (mode == "Upper") {
        second = second.toLocaleUpperCase();
      } else {
        second = second.toLocaleLowerCase();
      }
      let newKey = first + second + third;
      console.log(newKey);
      return newKey;
    },
    Slice(rawKey, start, end) {
      [start, end] = [Number(start), Number(end)]
      let first = rawKey.substring(0, start);
      let second = rawKey.substring(start, end);
      let third = rawKey.substring(end);
      let newKey = first + third;
      console.log(newKey);
      return newKey;
    }
  };
 
  let rawKey = input.shift();
  let line;
 
  while((line = input.shift()) != 'Generate') {
      let [actionsName, ...params] = line.split('>>>');
      let action = actions[actionsName];
      rawKey = action(rawKey, ...params)
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
