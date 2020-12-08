function solve(input) {
  let rawKey = input.shift();
  let newKey = "";
  let line = input.shift();

  while (line != "Generate") {
    let [command, ...tokens] = line.split(">>>");

    if (command == "Contains") {
      if (rawKey.includes(tokens[0])) {
        console.log(`${rawKey} contains ${tokens[0]}.`);
      } else {
        console.log("Substring not found!");
      }

      if (command == "Flip") {
        if (tokens[0] == "Upper") {
          rawKey =
            rawKey.substring(0, Number(tokens[1])) +
            rawKey.substring(Number(tokens[1]), Number(tokens[2]))
              .toLocaleUpperCase() + rawKey.substring(Number(tokens[2]), rawKey.length - 1);
              console.log(newKey);
        } else {
            newKey =
            rawKey.substring(0, Number(tokens[1])) +
            rawKey.substring(Number(tokens[1]), Number(tokens[2]))
              .toLocaleLowerCase() + rawKey.substring(Number(tokens[2]), rawKey.length - 1);
              console.log(newKey);
        }
      }

      if (command == 'Slice') {
          newKey = newKey.substring(0, +tokens[0]) + newKey
          console.log(newKey);
      }

    }

    line = input.shift();
  }
  console.log(rawKey);
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
