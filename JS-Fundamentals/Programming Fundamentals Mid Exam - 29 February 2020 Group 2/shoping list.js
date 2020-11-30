function solve(inputArr) {

    let shopingList = inputArr.shift().split('!');
    let nextLine = inputArr.shift();
    let [ command, product, newProduct ] = nextLine.split(' ');

    while (nextLine != 'Go Shopping!') {
        
        if (command == 'Urgent' && shopingList.includes(!product)) {
            urgent(shopingList);
        }

        else if (command == 'Unnecessary' && shopingList.includes(product)) {
            unnecessary(shopingList)
        }

       else if (command == 'Correct' && shopingList.includes(product)) {
            correct(shopingList)
        }
       else if (command == 'Rearrange' && shopingList.includes(product)) {
            rearrange(shopingList)
        }
        
        nextLine = inputArr.shift();
        [ command, product, newProduct ] = nextLine.split(' ');

    }

    console.log(shopingList.join(', '));

    function urgent(input) {
        input.unshift(product);
    }

    function unnecessary(input) {
       
            for (let i = 0; i < input.length; i++) {
                if (input[i] == product) {
                    input.splice(i, 1)
                }
            }
    }

    function correct(input) {

        for (let i = 0; i < input.length; i++) {
            if (input[i] == product) {
                input.splice(i, 1, newProduct);
            }
        }
    }

    function rearrange(input) {
        for (let i = 0; i < input.length; i++) {
            if (input[i] == product) {
                let index = input.splice(i, 1).toString()
                input.push(index)
            }
        }
    } 
    

}
solve([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes ',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
  ]
  )