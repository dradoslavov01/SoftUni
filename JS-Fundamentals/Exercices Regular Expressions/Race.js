function solve(input) {
  let names = input.shift().split(", ");
  let obj = {};

  for (const line of names) {
    obj[line] = 0;
  }
  for (const line of input) {
    const digitName = /[A-Za-z]/g;
    let match = line.match(digitName);
    let name = match.join("");

    if (obj.hasOwnProperty(name)) {
      const regex = /[0-9]/g;
      let digit = line
        .match(regex)
        .map(Number)
        .reduce((a, b) => a + b);
      obj[name] += digit;
    }
  }
  let sorted = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);

  console.log(
    `1st place: ${sorted[0]}\n2nd place: ${sorted[1]}\n3rd place: ${sorted[2]}`
  );
}
solve([
  "George, Peter, Bill, Tom",
  "G4e@55or%6g6!68e!!@",
  "R1@!3a$y4456@",
  "B5@i@#123ll",
  "G@e54o$r6ge#",
  "7P%et^#e5346r",
  "T$o553m&6",
  "end of race",
]);



