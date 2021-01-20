function solve(input) {
    let result = [];
    while(input.length) {
        let hero = input.shift()
        let [name, level, item] = hero.split(' / ')
        level = Number(level);
        let items = item ? item.split(', ') : [];
        result.push({name, level, items: items});

    }
    return JSON.stringify(result)

}
console.log(
  solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
);
