function solve(input) {
  let index = Number(input.shift());
  let arr = input.slice(0, input.indexOf("end"));
  let convertedArr = [];

  for (let i = 0; i < arr.length; i++) {
    let line = arr[i];
    let result = "";
    for (let j = 0; j < line.length; j++) {
      let ele = line[j];
      let code = ele.charCodeAt() - index;
      let str = String.fromCharCode(code);
      result += str;
    }
    convertedArr.push(result);
  }

  for (let i = 0; i < convertedArr.length; i++) {
    const element = convertedArr[i];
    let regex = /@(?<name>[A-Za-z]+)([^@\-!:>]+)?!(?<behavior>[A-Za-z])!/g;
    let match = regex.exec(element);
    if (match && match.groups.behavior == "G") {
      console.log(match.groups.name);
    }
  }
}
solve([
  "4",
  "~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%",
  "0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf",
  ";:<lyiljz{onzDPere=;=9<;8=rhknlf%K%",
  "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
  "DReh}e=<4lhzj1%K%",
  "end",
]);

// let asci = string.charCodeAt() - 3;

// let str = String.fromCharCode(asci)
