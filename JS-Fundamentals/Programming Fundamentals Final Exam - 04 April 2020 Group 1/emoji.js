function solve(input) {
  let string = input.join(" ");
  let emojiPattern = /(::|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g;
  let digits = /\d/g;
  let words = /[A-Za-z]+/g;

  let coolTreshold = string
    .match(digits)
    .map(Number)
    .reduce((a, b) => a * b);

  let match = string.match(emojiPattern);

  let coolEmoji = 0;
  let coolest = [];
  let isCool = false;

  for (let ele of match) {
    let emoji = ele.match(words).join(" ");
    let sum = 0;
    for (let x of emoji) {
      x = x.charCodeAt(x);
      sum += x;
    }
    if (sum >= coolTreshold) {
      coolest.push(ele);
      isCool = true;
    }
    coolEmoji++;
  }
  
  console.log(`Cool threshold: ${coolTreshold}\n${coolEmoji} emojis found in the text. The cool ones are:\n${coolest.join('\n')}`);
}

solve([
  "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
]);
