function solve(input){
    let username = input.shift();
    let pass = input.shift();

    let tryPass = input.shift();
    
    while(pass != tryPass){
        tryPass = input.shift();
    }
    console.log(`Welcome ${username}!`);
    
    
}
solve([ 'Nakov', '1234', 'pass', '1324', '1234' ])