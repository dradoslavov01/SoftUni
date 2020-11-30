function solve(input) {
    let goldPrice = 67.51;
    let goldInLv = 0;
    let firstParchase = 0;
    let bitcoinPrice = 11949.16;
    let boughtBitcoins = 0;
    let isBitcoin = false;
    
    for (let i = 0; i < input.length; i++) {

       if (i + 1 % 3 === 0) {
           input[i] *= 0.7;
       }
       goldInLv += input[i] * goldPrice;

       if (goldInLv >= bitcoinPrice) {
            goldInLv -= bitcoinPrice;
            boughtBitcoins++;
       }

       if (boughtBitcoins === 1) {
            isBitcoin = true;
            firstParchase++;
       }
    }
    console.log(goldInLv);
}
solve([100,200,300]);