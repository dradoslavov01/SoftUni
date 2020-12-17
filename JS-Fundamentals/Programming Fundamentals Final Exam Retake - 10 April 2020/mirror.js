function solve(input) {
  let regex = /(@|#)(?<first>[A-Za-z]{3,})\1{2}(?<second>[A-Za-z]{3,})\1/g;
  let counter = 0;
  let isPair = true;
  let pairs = [];
  let match = input[0].match(regex);
  if (match) {
    for (const ele of match) {
      regex = /(@|#)(?<first>[A-Za-z]{3,})\1{2}(?<second>[A-Za-z]{3,})\1/g;
      let word = regex.exec(ele);
      if (word) {
        let first = word.groups.first;
        let second = word.groups.second;
        let reversed = second.split("").reverse().join("");

        if (first == reversed) {
          let pair = `${first} <=> ${second}`;
          pairs.push(pair);
          isPair = true;
        } else {
          isPair = false;
        }
        counter++;
      }
    }
  }
  if (counter > 0) {
    console.log(`${counter} word pairs found!`);
    if (isPair) {
      console.log(`The mirror words are:
${pairs.join(", ")}`);
    } else {
      console.log("No mirror words!");
    }
  } else {
    console.log("No word pairs found!");
    console.log("No mirror words!");
  }
}

solve(["#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"]);
