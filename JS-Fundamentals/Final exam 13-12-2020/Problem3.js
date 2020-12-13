function solve(input) {
  let line = input.shift();
  let obj = {};
  let counter = 0;
  while (line != "Stop") {
    let [command, name, meal] = line.split("-");
    switch (command) {
      case "Like":
        if(!obj.hasOwnProperty(name)) { 
            obj[name] = [meal];
          }else {
            if(!obj[name].includes(meal)) { 
                obj[name].push(meal);
            }
          }
        break;
      case "Unlike":
        if(!obj.hasOwnProperty(name)) { 
            console.log(`${name} is not at the party.`);
        }else if(!obj[name].includes(meal)) { 
            console.log(`${name} doesn't have the ${meal} in his/her collection.`);
        }else { 
           console.log(`${name} doesn't like the ${meal}.`);
           let index = obj[name].indexOf(meal);
           obj[name].splice(index , 1);
           counter++;
          
        }
        break;
    }
    line = input.shift();
  }
  let sort = Object.entries(obj).sort(
    (a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0])
  );
  sort.forEach(element => {
    console.log(`${element[0]}: ${element[1].join(', ')}`);
  });
 console.log(`Unliked meals: ${counter}`);
}

solve([
    'Like-Mike-frenchFries',
    'Like-Mike-salad',
    'Like-George-fruit',
    'Like-Steven-salad',
    'Unlike-Steven-salad',
    'Unlike-Steven-fruit',
    'Stop'
  ]);
