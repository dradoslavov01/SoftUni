function solve(input) {
  let rawKey = input.shift();
  let newKey = rawKey;
  let line = input.shift();

  while (line != "Generate") {
    let [command, ...tokens] = line.split(">>>");

    if (command == "Contains") {
      if (rawKey.includes(tokens[0])) {
        console.log(`${rawKey} contains ${tokens[0]}.`);
      } else {
        console.log("Substring not found!");
      }
    }
      if (command == "Flip") {
        if (tokens[0] == "Upper") {
          newKey =
            newKey.substring(0, Number(tokens[1])) +
            newKey.substring(Number(tokens[1]), Number(tokens[2]))
              .toLocaleUpperCase() + newKey.substring(Number(tokens[2]), newKey.length);
              console.log(newKey);
        } else {
            newKey =
            newKey.substring(0, Number(tokens[1])) +
            newKey.substring(Number(tokens[1]), Number(tokens[2]))
              .toLocaleLowerCase() + newKey.substring(Number(tokens[2]), newKey.length);
              console.log(newKey);
        }
      }

      if (command == 'Slice') {
          newKey = rawKey.substring(0, +tokens[0]) + rawKey.substring(+tokens[1], rawKey.length)
          console.log(newKey);
      }

    
    line = input.shift(); 
  }
  console.log(newKey);
}

solve([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
