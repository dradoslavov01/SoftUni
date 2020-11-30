function solve(x, y, z, workersCount){
    x = Number(x);
    y = Number(y);
    z = Number(z);
    workersCount = Number(workersCount);

    let total = x * y;
    let wine = total * 0.4 / 2.5;
    let remaining = wine - z;
    let neededWine = z - wine;
    let person = remaining / workersCount;

    if(wine < z){
        console.log(`It will be a tough winter! More ${Math.floor(neededWine)} liters wine needed.`);
        
    }else{
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(remaining)} liters left -> ${Math.ceil(person)} liters per person.`);
        
        
    }
    
}
solve(650,
    2,
    175,
    3)