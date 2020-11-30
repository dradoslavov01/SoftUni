function solve(input) {
    let command = input.shift();
    let price = 0;
    let last = input[input.length - 1];

    while (command != 'special' && command != 'regular') {
        if (Number(command) < 0 ) {
            console.log('Invalid price!');
        } else {
            price += Number(command);
        }
        command = input.shift();
    }
    let taxes = price * 0.2;
    let totalPrice = price + taxes;

    if (last == 'special') {
        totalPrice *= 0.9
    } 

    if (totalPrice > 0) {
        console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${price.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    } else {
        console.log('Invalid order!');
    }


}

solve([
'1023', 
'15', 
'-20',
'-5.50',
'450', 
'20', 
'17.66', 
'19.30', 
'regular'
])