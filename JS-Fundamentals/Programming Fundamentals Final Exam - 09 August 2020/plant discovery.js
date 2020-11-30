function solve(input) {
    let n = Number(input.shift());
    let line = input.shift();
    let counter = 0;
    let plantRating = 0;
    let array = [];

    while (n != 0) {
        let [givenPlant, rarity] = line.split('<->');
        array.push(givenPlant, rarity);
        n--;
        line = input.shift();
    }


    while (line != 'Exhibition') {
 
            let [command, info] = line.split(': ');
            let [plant, rating] = info.split(' - ');

           if (command == 'Rate') {
                

                for (let i = 0; i < array.length; i+=2) {
                    if (array[i] == plant) {
                        plantRating += Number(rating);
                        console.log(plantRating);
                        counter++
                    }
                }
           }
            
        line = input.shift();
    }

   

}

solve([
    '3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
  ])