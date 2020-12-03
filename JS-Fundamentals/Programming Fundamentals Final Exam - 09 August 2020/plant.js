function solve(input) {
  let n = Number(input.shift());
  let obj = {};

  let commands = {
    Rate(plant, rating) {
      if (obj.hasOwnProperty(plant)) {
        obj[plant].rating.push(Number(rating));
      }
    },
    Update(plant, newRarityr) {
      if (obj.hasOwnProperty(plant)) {
        obj[plant].rarity.splice(0, 1, Number(newRarityr));
      }
    },
    Reset(plant) {
      if (obj.hasOwnProperty(plant)) {
        obj[plant].rating = [0];
      }
    },
  };

  let line = input.shift();
  while (n != 0) {
    let [plant, rarity] = line.split("<->");
    obj[plant] = {
      rarity: [rarity],
      rating: [],
    };
    n--;
    line = input.shift();
  }

  while (line != "Exhibition") {
    let [command, params] = line.split(": ");
    let tokens = params.split(" - ");
    commands[command](tokens[0], tokens[1]);
    line = input.shift();
  }

  let sort = Object.entries(obj).forEach((ele) => {
    ele[1].rating = ele[1].rating
      .reduce((a, b) => (a + b) / ele[1].rating.length)
      .toFixed(2);
      console.log(ele[1].rating.sort((a,b)=>a-b));
  });F
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
