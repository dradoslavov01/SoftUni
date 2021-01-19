function solve(car) {
  let { model, power, color, carriage, wheelsize } = car;

  let obj = {
    model,
    engine: {
      power: chekPower(power),
      volume: chekVolume(power),
    },
    carriage: {
      type: carriage,
      color: color,
    },
    wheels: wheels(wheelsize),
  };

  function chekPower(power) {
    if (power <= 90) {
      power = 90;
    } else if (power <= 120) {
      power = 120;
    } else {
      power = 200;
    }
    return power;
  }
  function chekVolume(power) {
    let volume = 0;
    if (power <= 90) {
      volume = 1800;
    } else if (power <= 120) {
      volume = 2400;
    } else {
      volume = 3500;
    }
    return volume;
  }
  function wheels(wheel) {
    let arr = [];
    if (wheel % 2 == 0) {
      wheel -= 1;
    }
    for (let i = 1; i <= 4; i++) {
      arr.push(wheel);
    }
    return arr;
  }
  return obj
}
console.log(
  solve({ model: 'Opel Vectra',
  power: 110,
  color: 'grey',
  carriage: 'coupe',
  wheelsize: 17 })
);
