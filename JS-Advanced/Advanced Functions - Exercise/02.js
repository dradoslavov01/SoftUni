function solve(...args) {
  /* let output = ''; */
  args.forEach((ele) => {
    console.log(`${typeof ele}: ${ele}`);
  });
  let types = {};
  args.forEach((ele) => {
    if (!types.hasOwnProperty(typeof ele)) {
      types[typeof ele] = 1;
    } else {
      types[typeof ele] += 1;
    }
  });
  let keys = Object.keys(types);

  keys.sort((a, b) => types[b] - types[a]);

  for (let set of keys) {
    console.log(`${set} = ${types[set]}`);
  }
}
solve("cat", 42, 32, function () {
  console.log("Hello world!");
});
