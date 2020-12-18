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

        if (obj.hasOwnProperty(car)) {
          if (obj[car][1] >= fuel) {
            obj[car][1] -= fuel;
            obj[car][0] += distance;
            console.log(
              `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed."`
            );
          }
        } else {
          console.log("Not enough fuel to make that ride");
        }
        if (obj[car][0] >= 100000) {
          delete obj[car];
          console.log(`Time to sell the ${car}`);
        }
        break;
      case "Refuel":
        car = tokens[0];
         fuel = Number(tokens[1]);
        if (obj.hasOwnProperty(car)) {
          if (fuel > 75) {
            fuel -= obj[car][1];
            obj[car][1] += fuel;
            console.log(`${car} refueled with ${fuel} liters`);
          }
        }
        break;
      case "Revert":
        if (obj.hasOwnProperty(car)) {
            car = tokens[0]
          let km = Number(tokens[1]);
          obj[car][0] += km;
          console.log(`${tokens[0]} mileage decreased by ${km} kilometers`);
          if (obj[car][0] < 10000) {
            obj[car][0] = 10000;
          }
        }
        break;
    }
    line = input.shift();
  }
}

solve([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
