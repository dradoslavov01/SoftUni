function solve(input) {
  let obj = {};
  input.sort().forEach((el) => {
    let [product, price] = el.split(" : ");
    price = Number(price);
    if (!obj[product[0]]) {
      obj[product[0]] = { cataloge: [] };
    }
    if (!obj[product[0]].hasOwnProperty(product[0])) {
      obj[product[0]].cataloge.push(product, price);
    }
  });
  
  for (let key in obj) {
    console.log(key);
    for (let i = 0; i < obj[key].cataloge.length; i++) {
      if (i % 2 == 0) {
        console.log(`  ${obj[key].cataloge[i]}: ${obj[key].cataloge[i + 1]}`);
      }
    }
  }
}
solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
