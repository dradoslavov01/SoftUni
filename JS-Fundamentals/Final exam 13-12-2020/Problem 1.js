function solve(input) {
  let string = input.shift();

  let line = input.shift();

  while (line != "Finish") {
    let [command, ...tokens] = line.split(" ");

    switch (command) {
      case "Replace":
        let cuurChar = tokens[0];
        let newChar = tokens[1];
        for (let ele of string) {
          if (ele == cuurChar) {
            string = string.replace(cuurChar, newChar);
          }
        }
        console.log(string);
        break;
      case "Cut":
        let start = Number(tokens[0]);
        let end = Number(tokens[1]);

        if (start >= 0 && end <= string.length) {
          let first = string.substring(0, start);
          let second = string.substring(start, end);
          let third = string.substring(end + 1);

          string = first + third;
          console.log(string);
        } else {
            console.log('Invalid indices!');
        }

        break;
      case "Make":
        if (tokens[0] == "Upper") {
          string = string.toLocaleUpperCase();
        } else {
          string = string.toLocaleLowerCase();
        }
        console.log(string);
        break;
      case "Check":
        if (string.includes(tokens[0])) {
          console.log(`Message contains ${tokens[0]}`);
        } else {
          console.log(`Message doesn't contain ${tokens[0]}`);
        }
        break;
      case "Sum":
        let startI = Number(tokens[0]);
        let endI = Number(tokens[1]);
        let sum = 0;
        if (startI >= 0 && endI <= string.length) {
          let substr = string.substring(startI, endI + 1);

          for (let x of substr) {
            x = x.charCodeAt(x);
            sum += x;
          }
          console.log(sum);
        } else {
          console.log("Invalid indices!");
        }
        break;
    }
    line = input.shift();
  }
}

solve([
  "HappyNameDay",
  "Replace p r",
  "Make Lower",
  "Cut 2 23",
  "Sum -2 2",
  "Finish",
]);
