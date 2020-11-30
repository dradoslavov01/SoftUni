function solve(input) {
  let obj = {};

  for (let line of input) {
    let [company, employee] = line.split(" -> ");
    obj[company] = [];
  }

  input.forEach((line) => {
    let [company, employee] = line.split(" -> ");
    if (obj.hasOwnProperty(company) && !obj[company].includes(employee)) {
      obj[company].push(employee);
    }
  });

  let sorted = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

  for (let ele of sorted) {
    console.log(`${ele[0]}\n-- ${ele[1].join("\n-- ")}`);
  }
}

solve([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
