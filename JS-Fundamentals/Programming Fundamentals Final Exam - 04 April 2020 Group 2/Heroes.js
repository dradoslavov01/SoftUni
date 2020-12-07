function solve(input) {
  let n = Number(input.shift());
  let heroes = {};
  while (n != 0) {
    let [hero, hp, mp] = input.shift().split(" ");
    hp = Number(hp);
    mp = Number(mp);
    heroes[hero] = { hp, mp };
    n--;
  }
  let commands = input.shift();
  while (commands != "End") {
    let [command, hero, ...tokens] = commands.split(" - ");

    switch (command) {
      case "CastSpell":
        if (heroes[hero].mp >= Number(tokens[0])) {
          heroes[hero].mp -= Number(tokens[0]);
          console.log(
            `${hero} has successfully cast ${tokens[1]} and now has ${heroes[hero].mp} MP!`
          );
        } else {
          console.log(`${hero} does not have enough MP to cast ${tokens[1]}!`);
        }
        break;
      case "TakeDamage":
        heroes[hero].hp -= Number(tokens[0]);
        if (heroes[hero].hp > 0) {
          console.log(
            `${hero} was hit for ${Number(tokens[0])} HP by ${
              tokens[1]
            } and now has ${heroes[hero].hp} HP left!`
          );
        } else {
          console.log(`${hero} has been killed by ${tokens[1]}!`);
        }
        break;
      case "Recharge":
        let curentMP = heroes[hero].mp;
        heroes[hero].mp += Number(tokens[0]);
        if (heroes[hero].mp > 200) {
          let diff = 200 - curentMP;
          heroes[hero].mp = 200;
          console.log(`${hero} recharged for ${diff} MP!`);
        } else {
          console.log(`${hero} recharged for ${Number(tokens[0])} MP!`);
        }
        break;
      case "Heal":
        let curentHP = heroes[hero].hp;
        heroes[hero].hp += Number(tokens);
        if (heroes[hero].hp > 100) {
          let diff = 100 - curentHP;
          heroes[hero].hp = 100;
          console.log(`${hero} healed for ${diff} HP!`);
        } else {
          console.log(`${hero} healed for ${Number(tokens)} HP!`);
        }
    }
    commands = input.shift();
  }
  function compare(a, b) {
    let result = b[1].hp - a[1].hp || a[0].localeCompare(b[0]);
    return result;
  }
  let sort = Object.entries(heroes)
    .filter(([n, { hp, mp }]) => hp > 0)
    .sort(compare);

    for (const key of sort) {
        console.log(key[0]);
        console.log(`  HP: ${key[1].hp}`);
        console.log(`  MP: ${key[1].mp}`);
    }
}

solve([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
