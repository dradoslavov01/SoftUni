function solve(input) {
    let clientsCount = Number(input.shift());

    let basket = 1.5;
    let wreath = 3.8;
    let chocolate = 7;

    let totalShopping = 0;
    for (let i = 1; i <= clientsCount; i++) {
        let product = input.shift();
        let shopping = 0;
        let shoppingCounter = 0;

        while (product != 'Finish') {
            if(product == 'basket') {
                shopping += basket;
            }else if (product == 'wreath') {
                shopping += wreath;
            }else {
                shopping += chocolate;
            }

            shoppingCounter++;
            product = input.shift();
        }
        if(shoppingCounter % 2 == 0) {
            shopping *= 0.8;
        }
        
        if(product == 'Finish') {
            console.log(`You purchased ${shoppingCounter} items for ${shopping.toFixed(2)} leva.`);
            
        }
        totalShopping += shopping;
    }
    let averageBill = totalShopping / clientsCount;
    console.log(`Average bill per client is: ${averageBill.toFixed(2)} leva.`);
    
} 
solve([
    '2',
    'basket',
    'wreath',
    'chocolate bunny',
    'Finish',
    'wreath',
    'chocolate bunny',
    'Finish'
  ]
  );