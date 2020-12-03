function solve(input) {
  let pattern = /(=|\/)[A-Z][A-Za-z]{3,}\1/g;
  let points = 0;
  let match = input.match(pattern);
  let arr = [];
  if (match) {
    for (let i = 0; i < match.length; i++) {
      let split = match[i].split("");
      for (let i = 0; i < split.length; i++) {
        if (split[i] == "=" || split[i] == "/") {
          split.splice(i, 1);
        }
      }
      arr.push(split.join(""));
    }
    console.log("Destinations: " + arr.join(", "));
    console.log(`Travel Points: ${arr.join("").length}`);
  } else {
    console.log("Destinations: ");
    console.log(`Travel Points: 0`);
  }
}

solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
