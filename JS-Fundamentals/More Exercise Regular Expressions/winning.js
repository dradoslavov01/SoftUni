function solve(input) {
  let inputSplit = input[0].split(/\s*?,\s*?/);
  let arr = [];
  for (const elem of inputSplit) {
    arr.push(elem.trim());
  }

  for (const ele of arr) {
    const regex = /\w*?(?<leftSide>[\$\^@#]{5,10})[\w]*?(?<rightSide>\1)\w*?/g;
    let match = regex.exec(ele);
    if (ele.length >= 20) {
      if (match) {
        if (match.groups.leftSide == match.groups.rightSide) {
          match.groups.leftSide.length == 10 &&
          match.groups.rightSide.length == 10
            ? console.log(
                `ticket "${ele}" - ${match.groups.leftSide.length}${match.groups.leftSide[0]} Jackpot!`
              )
            : console.log(
                `ticket "${ele}" - ${match.groups.leftSide.length}${match.groups.leftSide[0]}`
              );
        }
      } else {
        console.log(`ticket "${ele}" - no match`);
      }
    } else {
      console.log(`invalid ticket`);
    }
  }
}
solve([
  "$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,   th@@@@@@eemo@@@@@@ey ,validticketnomatch:(",
]);
