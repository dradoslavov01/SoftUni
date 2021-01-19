function solve(input) {
  let obj = {};
  for (const line of input) {
    let [town, product, price] = line.split(" | ");

    if(!obj[product]) {
      obj[product] = {town, price: Number(price)};
    } else {
      if (obj[product].price > Number(price)) {
        obj[product] = {town, price: Number(price)};
      }
    }
  }
  let arr = [];

  for (const product in obj) {
    arr.push(`${product} -> ${obj[product].price} (${obj[product].town})`)
  }
  return arr.join('\n')
}
console.log(
  solve([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
  ])
);
