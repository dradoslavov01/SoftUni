function solve(input) {
  let n = Number(input.shift());
  let obj = {};
  const rarity = "rarity";
  const rating = "rating";
  let commands = {
    Rate(plant, rating) {
      if (obj.hasOwnProperty(plant)) {
        obj[plant].rating.push(Number(rating));
      } else {
        console.log("error");
      }
    },
    Update(plant, newRarityr) {
      if (obj.hasOwnProperty(plant)) {
        obj[plant].rarity = newRarityr;
      } else {
        console.log("error");
      }
    },
    Reset(plant) {
      if (obj.hasOwnProperty(plant)) {
        obj[plant].rating = [0];
      } else {
        console.log("error");
      }
    },
  };

  input.splice(0, n).map((x) => {
    const [plant, rarity] = x.split("<->");
    obj[plant] = { rarity: +rarity, rating: [] };
  });
  let line = input.shift();
  while (line != "Exhibition") {
    let [command, params] = line.split(": ");
    let tokens = params.split(" - ");
    commands[command](tokens[0], +tokens[1]);
    line = input.shift();
  }
  let result = "";
  console.log("Plants for the exhibition:");
  Object.keys(obj).forEach((x) => {
    let arr = obj[x].rating;
    if (arr.length !== 0) {
      obj[x].rating = arr.reduce((a, b) => a + b) / arr.length;
    } else {
      obj[x].rating = 0;
    }
  });
  Object.keys(obj)
    .sort(
      (a, b) => obj[b].rarity - obj[a].rarity || obj[b].rating - obj[a].rating
    )
    .forEach((plant) => {
      result += `- ${plant}; Rarity: ${obj[plant].rarity}; Rating: ${obj[
        plant
      ].rating.toFixed(2)}\n`;
    });
  console.log(result);
}

solve([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
