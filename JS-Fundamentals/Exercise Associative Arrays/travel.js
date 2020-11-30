function solve(input) {
  let obj = {};

  input.forEach((line) => {
    let [country, town, price] = line.split(" > ");
    price = Number(price);
    if (!obj.hasOwnProperty(country)) {
      obj[country] = {};
      obj[country][town] = price;
    } else {
      let towns = obj[country];

      if (!towns.hasOwnProperty(town)) {
        towns[town] = price;
      } else {
        let oldPrice = towns[town];
        if (oldPrice > price) {
          towns[town] = price;
        }
      }
    }
  });

  let sortedCountr = Object.entries(obj).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  for (let [name, towns] of sortedCountr) {
    let sortedTowns = Object.entries(towns).sort((a, b) => a[1] - b[1]);
    let line = `${name} -> `;
    for (let [townName, townPrice] of sortedTowns) {
      line += `${townName} -> ${townPrice} `;
    }
    console.log(line);
  }
}
solve([
  "Bulgaria > Sofia > 200",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 500",
]);

// [ 'Albania', { Tirana: 1000 } ],
// [ 'Bulgaria', { Sofia: 200, Sopot: 800 } ],
// [ 'France', { Paris: 2000 } ]
