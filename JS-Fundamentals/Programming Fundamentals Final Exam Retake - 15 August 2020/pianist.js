function solve(input) {
  let initialNum = Number(input.shift());

  let obj = {};

  let commands = {
    ChangeKey(piece, newKey) {
      if (obj.hasOwnProperty(piece)) {
        obj[piece].key = newKey;
        console.log(`Changed the key of ${piece} to ${newKey}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    },
    Add(piece, composer, key) {
      if (obj.hasOwnProperty(piece)) {
        console.log(`${piece} is already in the collection!`);
      } else {
        obj[piece] = { composer, key };
        console.log(
          `${piece} by ${composer} in ${key} added to the collection!`
        );
      }
    },
    Remove(piece) {
      if (obj.hasOwnProperty(piece)) {
        delete obj[piece];
        console.log(`Successfully removed ${piece}!`);
      } else {
        console.log(
          `Invalid operation! ${piece} does not exist in the collection.`
        );
      }
    },
  };

  while (initialNum != 0) {
    let [piece, composer, key] = input.shift().split("|");
    obj[piece] = { composer, key };
    initialNum--;
  }
  let line = input.shift();
  while (line != "Stop") {
    let [command, piece, composer, key] = line.split("|");
    commands[command](piece, composer, key);
    line = input.shift();
  }

  let sort = Object.entries(obj)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach((key) => {
      console.log(
        `${key[0]} -> Composer: ${key[1].composer}, Key: ${key[1].key}`
      );
    });
}

solve([
  "4",
  "Eine kleine Nachtmusik|Mozart|G Major",
  "La Campanella|Liszt|G# Minor",
  "The Marriage of Figaro|Mozart|G Major",
  "Hungarian Dance No.5|Brahms|G Minor",
  "Add|Spring|Vivaldi|E Major",
  "Remove|The Marriage of Figaro",
  "Remove|Turkish March",
  "ChangeKey|Spring|C Major",
  "Add|Nocturne|Chopin|C# Minor",
  "Stop",
]);
