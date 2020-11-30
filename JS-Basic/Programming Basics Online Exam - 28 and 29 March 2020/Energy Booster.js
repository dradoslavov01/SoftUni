function solve(input) {
    let fruit = input.shift();
    let sizeOfSet = input.shift();
    let orderedSetsCount = Number(input.shift());

    let price = 0;
    if(sizeOfSet === 'small'){
        if(fruit === 'Watermelon'){
            price = 2 * 56 * orderedSetsCount;
        }else if(fruit === 'Mango'){
            price = 2 * 36.66  * orderedSetsCount;
        }else if(fruit === 'Pineapple'){
            price = 2 * 42.10 * orderedSetsCount;
        }else if(fruit === 'Raspberry'){
            price = 2 * 20 * orderedSetsCount;
        }
    }else if(sizeOfSet === 'big'){
        if(fruit === 'Watermelon'){
            price = 5 *  28.70 * orderedSetsCount;
        }else if(fruit === 'Mango'){
            price = 5 * 19.60  * orderedSetsCount;
        }else if(fruit === 'Pineapple'){
            price = 5 * 24.80 * orderedSetsCount;
        }else if(fruit === 'Raspberry'){
            price = 5 * 15.20  * orderedSetsCount;
        }
    }
    let discount = 0;
    if(400 <= price && price <= 1000){
        discount = price * 0.15;
    }else if(price > 1000){
        discount = price * 0.5;
    }
    let finalPrice = price - discount;
    
    console.log(`${finalPrice.toFixed(2)} lv.`);
    
}
solve([ 'Pineapple', 'small', '1' ]);