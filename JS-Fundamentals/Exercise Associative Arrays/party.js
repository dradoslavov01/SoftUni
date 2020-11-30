function solve(input) {
  let command = input.shift();
  let obj = {
    VIP: [],
    regular: [],
  }
  while (command != "PARTY") {
    if (isNaN(command[0])) {
      obj.regular.push(command);
    } else {
      obj.VIP.push(command);
    }
    command = input.shift();
  }

  for (let ele of input) {
    if (obj.VIP.includes(ele)) {
      let i = obj.VIP.indexOf(ele);
      obj.VIP.splice(i, 1);
    } else if (obj.regular.includes(ele)) {
      let i = obj.regular.indexOf(ele);
      obj.regular.splice(i, 1);
    }
  }
  let counter = obj.VIP.length + obj.regular.length;
  let vip = obj.VIP.join("\n");
  let regular = obj.regular.join("\n");

  console.log(`${counter}${vip}\n${regular}`);
}

solve([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
