function solve(input) {
    let text = input.shift();

    while(text != 'Stop'){
        console.log(text);
        text = input.shift();  
        
    }
}
solve(['Nakov',
    'SoftUni',
    'Sofia',
    'Bulgaria',
    'SomeText',
    'Stop'])