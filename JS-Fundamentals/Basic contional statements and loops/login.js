function solve(input) {
    let user = input.shift();
    let reversed = '';
    let correctPass = false;
    let incorrectPass = false;
    let counter = 0;
    for(let i = user.length - 1; i >= 0; i--) {
        reversed += user[i];
    }
    
   while (true) {
        counter++
        pass = input.shift();
     
        if(pass == reversed) {
            correctPass = true;
            break;
        }
        if(counter >= 4){
            incorrectPass = true;
            break;
        } else {
            console.log('Incorrect password. Try again.');
        }
   }

    if(incorrectPass) {
       console.log(`User ${user} blocked!`);
     }

    if (correctPass) {
        console.log(`User ${user} logged in.`);
    }  
}
solve(['momo','omom']);