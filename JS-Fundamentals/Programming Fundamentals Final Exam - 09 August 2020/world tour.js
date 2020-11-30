function solve(input) {
    let string = input.shift().split('')
    let length = string.length;

    console.log(string);
    string.splice(7, 0, 'Rome')
    let str = string.slice(11,17)
//    string.splice(0, 1, 'Bulgaria')
   console.log(string);
   string
}

solve([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
  ])