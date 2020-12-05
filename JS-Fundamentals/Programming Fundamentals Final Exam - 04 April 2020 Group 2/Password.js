function solve(input) {
  let string = input.shift();
  let password = "";
  let isNot = true;
  let line = input.shift();
  while (line != "Done") {
    let tokens = line.split(" ");

    if (tokens[0] == "TakeOdd") {
      for (let i = 0; i < string.length; i++) {
        const element = string[i];
        if (i % 2 != 0) {
          password += element;
        }
      }
    } else if (tokens[0] == "Cut") {
      password =
        password.substring(0, Number(tokens[1])) +
        password.substring(Number(tokens[1]) + Number(tokens[2]));
    } else {
      password = 
    }
    
    line = input.shift();
  }
  
}
solve([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
