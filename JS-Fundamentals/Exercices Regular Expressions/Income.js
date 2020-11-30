function solve(input) {
    let result = 0;
    let end = input.slice(0, input.indexOf('end of shift'))
    for (const line of input) {
        const regex = /%(?<name>[A-Z][a-z]+)%([^\|\$%\n]+)?<(?<product>[\w]+)>([^\|\$%\n]+)?\|(?<count>[\d]+)\|([^\|\$%\d]+)?(?<price>[\d]+(\.[\d]+)?)\$/g
        let match = regex.exec(line);

        if(match) {
            let totalPrice = Number(match.groups.count) * Number(match.groups.price);
            console.log(`${match.groups.name}: ${match.groups.product} - ${totalPrice.toFixed(2)}`);
            result += totalPrice
        }
        
    }
    console.log(`Total income: ${result.toFixed(2)}`);
}

solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
  ])