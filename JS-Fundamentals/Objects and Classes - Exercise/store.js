function solve(stock, ordered) {

    let obj = {};

    for (let i = 0; i < stock.length; i+=2) {
        const ele = stock[i];

        obj[ele] = Number(stock[i + 1])
    }
    for (let i = 0; i < ordered.length; i+=2) {
        const ele = ordered[i];

        if(!obj.hasOwnProperty(ele)) {
            obj[ele] = 0;
        } 
        
        obj[ele] += Number(ordered[i + 1])
        
    }
    Object.keys(obj).forEach(el => {
        console.log(`${el} -> ${obj[el]}`);
    })

}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])