function solve(input) {
  let total = 0;
  let result = "";
  for (const line of input) {
    let regex = />>(?<name>[A-Za-z]+)<<(?<product>[\d]+(.[\d+]+)?)!(?<price>[\d]+)/g;
    let match = regex.exec(line);
    if (match) {
      let producPrice = match.groups.product * match.groups.price;
      total += producPrice;
      result += match.groups.name + "\n";
    }
    if (line == 'Purchase') {break}
  }
  console.log(
    `Bought furniture:\n${result}Total money spend: ${total.toFixed(2)}`
  );
}
solve([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
