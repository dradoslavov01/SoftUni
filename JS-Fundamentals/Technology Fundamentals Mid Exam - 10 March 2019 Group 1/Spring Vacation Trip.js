function solve(input) {
    input = input.map(Number)
    const days = input.shift()
    const budget = input.shift()
    const people = input.shift()
    const fuelPerKmPrice = input.shift()
    const foodPerPerson = input.shift()
    const roomPerPerson = input.shift()
    let hotelDiscount = 1
    let currentExpenses = 0

    let isNeedMoney = false;
    

    if (people > 10) hotelDiscount = 0.75

    currentExpenses += foodPerPerson * people * days + roomPerPerson * people * days * hotelDiscount
    for (let i = 0; i < days; i++) {
        currentExpenses += input[i] * fuelPerKmPrice
        if (currentExpenses > budget){
            isNeedMoney = true;
            break
        }
           
        if ((i + 1) % 3 === 0 || ((i + 1) % 5 === 0)) {
            currentExpenses += currentExpenses * 0.4
            if (currentExpenses > budget) {
                isNeedMoney = true;
                break;
            }
                
        }
        if ((i + 1) % 7 === 0) {
            currentExpenses -= currentExpenses / people
        }
    }

    if (isNeedMoney){
        console.log(`Not enough money to continue the trip. You need ${(currentExpenses - budget).toFixed(2)}$ more.`);
    }else {
        console.log(`You have reached the destination. You have ${(budget - currentExpenses).toFixed(2)}$ budget left.`);
    }
}




solve([
    '10',  '20500', '11',
    '1.2', '8',     '13',
    '100', '150',   '500',
    '400', '600',   '130',
    '300', '350',   '200',
    '300'
  ]);  