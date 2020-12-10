function solve(input) {
  let rawKey = input.shift();
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
          rawKey =
            rawKey.substring(0, Number(tokens[1])) +
            rawKey.substring(Number(tokens[1]), Number(tokens[2]))
              .toLocaleUpperCase() + rawKey.substring(Number(tokens[2]), rawKey.length);
              console.log(rawKey);
        } else {
            rawKey =
            rawKey.substring(0, Number(tokens[1])) +
            rawKey.substring(Number(tokens[1]), Number(tokens[2]))
              .toLocaleLowerCase() + rawKey.substring(Number(tokens[2]), rawKey.length);
              console.log(rawKey);
        }
      }

      if (command == 'Slice') {
          rawKey = rawKey.substring(0, +tokens[0]) + rawKey.substring(+tokens[1], rawKey.length)
          console.log(rawKey);
      }

    
    line = input.shift(); 
  }
  console.log(`Your activation key is: ${rawKey}`);
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
