function solve(input) {
  let string = input.shift();
  let line = input.shift();
  let newString = string;
  while (line != "Travel") {
    let [command, ...params] = line.split(":");

    switch (command) {
      case "Add Stop":
        newString =
          newString.substring(0, Number(params[0])) +
          params[1] +
          newString.substring(params[0], string.length);
        break;
      case "Remove Stop":
        let first = newString.indexOf(newString[0]);
        if(first <= Number(params[0]) && newString.length - 1 >= Number(params[1])) {
          newString =
          newString.substring(0, Number(params[0])) +
          newString.substring(Number(params[1]) + 1, newString.length);
        }
        break;
      case "Switch":
        if (string.includes(params[0])) {
          newString = newString.replace(params[0], params[1]);
        }
        break;
    }
    console.log(newString);
    line = input.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${newString}`);
}

solve([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
