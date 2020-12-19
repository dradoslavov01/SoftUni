function solve(input) {
  let n = +input.shift();
  let car, distance, fuel;
  let obj = {};

  while (n != 0) {
    let line = input.shift();
    let [car, mileage, fuel] = line.split("|");
    [mileage, fuel] = [Number(mileage), Number(fuel)];
    if (!obj.hasOwnProperty(car)) {
      obj[car] = [mileage, fuel];
    }
    n--;
  }

  let line = input.shift();
  while (line != "Stop") {
    let [command, ...tokens] = line.split(" : ");

    switch (command) {
      case "Drive":
        car = tokens[0];
        distance = Number(tokens[1]);
        fuel = Number(tokens[2]);

        if (obj[car][1] > fuel) {
          obj[car][1] -= fuel;
          obj[car][0] += distance;
          console.log(
            `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
          );
        } else {
          console.log("Not enough fuel to make that ride");
        }

        if (obj[car][0] >= 100000) {
          delete obj[car];
          console.log(`Time to sell the ${car}!`);
        }
        break;
      case "Refuel":
        car = tokens[0];
        fuel = Number(tokens[1]);

        if (fuel + obj[car][1] > 75) {
          fuel = 75 - obj[car][1];
        }
        obj[car][1] += fuel;
        console.log(`${car} refueled with ${fuel} liters`);

        break;
      case "Revert":
        car = tokens[0];
        let km = Number(tokens[1]);
        obj[car][0] -= km;
        if (obj[car][0] <= 10000) {
          obj[car][0] = 10000;
        } else {
          console.log(`${tokens[0]} mileage decreased by ${km} kilometers`);
        }

        break;
    }
    line = input.shift();
  }
  let result = Object.entries(obj).sort((a, b) => b[1][0] - a[1][0]);
  let output = result.sort((a, b) => a[0].localeCompare(b)[0])
    .forEach((key) => {
      console.log(
        `${key[0]} -> Mileage: ${key[1][0]} kms, Fuel in the tank: ${key[1][1]} lt.`
      );
    });
}
solve([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);
