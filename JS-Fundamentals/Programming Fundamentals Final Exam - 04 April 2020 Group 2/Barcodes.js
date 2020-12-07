function solve(input) {
  let n = input.shift();

  while (n != 0) {
    let line = input.shift();
    let regex = /(@#+)(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])\1/g;
    let match = regex.match(line);
    if (match) {
      let product = match.groups.product;
      let matches = product.match(/\d+/g);
      if (matches != null) {
        console.log(`Product group: ${matches.join("")}`);
      } else {
        console.log("Product group: 00");
      }
    } else {
      console.log("Invalid barcode");
    }
    n--;
  }
}

solve(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che46sE@##"]);
