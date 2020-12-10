function solve(input) {
  let rawKey = input.shift();
  let newKey = rawKey;
  let line = input.shift();

  while (line != "Generate") {
    let [command, ...tokens] = line.split(">>>");

    if (command == "Contains") {
      if (newKey.includes(tokens[0])) {
        console.log(`${newKey} contains ${tokens[0]}.`);
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
          newKey = newKey.substring(0, +tokens[0]) + newKey.substring(+tokens[1], newKey.length)
          console.log(newKey);
      }

    
    line = input.shift(); 
  }
  console.log(`Your activation key is: ${newKey}`);
}

solve([
  '134softsf5ftuni2020rockz42',
  'Slice>>>3>>>7',
  'Contains>>>-rock',
  'Contains>>>-uni-',
  'Contains>>>-rocks',
  'Flip>>>Upper>>>2>>>8',
  'Flip>>>Lower>>>5>>>11',
  'Generate'
]);
