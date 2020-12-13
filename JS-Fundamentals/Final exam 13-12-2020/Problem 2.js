function solve(input) {
  let n = Number(input.shift());

  for (let ele of input) {
    let regex = /!(?<command>[A-Z][a-z]{3,})!:\[(?<message>[A-Za-z]{8,})\]/g;

    let match = regex.exec(ele);
    let ascii = "";
    if (match) {
      let message = match.groups.message;
      for (let x of message) {
        x = x.charCodeAt(x);
        ascii += x + " ";
      }
      console.log(`${match.groups.command}: ${ascii}`);
    } else {
      console.log("The message is invalid");
    }
  }
}

solve([
  "3",
  "!play!:[TheNewSong]",
  "!Ride!:[Bike]",
  "!Watch!:[LordofTheRings]",
]);
