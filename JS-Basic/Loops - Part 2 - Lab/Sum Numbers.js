function solve(input){
    let ele = input.shift();

    let sumNums = 0;
    while(ele !== 'Stop'){
       let nums = Number(ele);
       sumNums += nums;
       ele = input.shift();

    }
    console.log(sumNums);

}
solve([ '10', '20', '30', '45', 'Stop' ]);