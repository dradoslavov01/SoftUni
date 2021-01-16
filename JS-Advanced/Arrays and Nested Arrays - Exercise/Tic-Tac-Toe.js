function solve(input) {
  let result = [
    [false, false, false],//0
    [false, false, false],//1
    [false, false, false],//2
  ];
  let isOver = false;

  let cond = false;                                           
  let res = '';
  for(let set of input){
    let [arr, index] = set.split(' ');
    arr = Number(arr);
    index = Number(index);
    if(!cond){
        res = 'X'
    }else{ res = 'O'}
     // x x x  0
    // o o o  1 
    // x x x  2
    //left-top to top-right  - linear v
    //left-top to bottom-left  - linear v
    //right-top to right-bottom - linear v
    //left-bottom to right-bottom - linear v
    //middle-top to middle-bottom - linear v
    //middle-left to middle-right - linear v
    //left-bottom to top-right - diagonal
    //left-top to bottom-right - diagonal
    if(result[arr][index] === false){
        result[arr][index] = res;                                      
        cond = !cond
    }else{console.log('This place is already taken. Please choose another!')
    continue;}
    const winner = `Player ${res} wins!`;
    if(result[0][0] !== false && result[0][0] === result[0][1] && result[0][1] === result[0][2]){
        console.log(winner);
        isOver = true;
        break;
    }
    else if(result[0][0] !== false && result[0][0] === result[1][0] && result[1][0] === result[2][0]){
        console.log(winner);
        isOver = true;
        break;
    }
    else if(result[0][2] !== false && result[0][2] === result[1][2] && result[1][2] === result[2][2]){
        console.log(winner);
        isOver = true;
        break;
    }
    else if(result[2][0] !== false && result[2][0] === result[2][1] && result[2][1] === result[2][2]){
        console.log(winner);
        isOver = true;
        break;
    }
    else if(result[0][1] !== false && result[0][1] === result[1][1] && result[1][1] === result[2][1]){
        console.log(winner);
        isOver = true;
        break;
    }
    else if(result[1][0] !== false && result[1][0] === result[1][1] && result[1][1] === result[1][2]){
        console.log(winner);
        isOver = true;
        break;
    }
    else if(result[2][0] !== false && result[2][0] === result[1][1] && result[1][1] === result[0][2]){
        console.log(winner);
        isOver = true;
        break;
    }
    else if(result[1][1] !== false && result[0][0] === result[1][1] && result[1][1] === result[2][2]){
        console.log(winner);
        isOver = true;
        break;
    }
    
   }
   if (!isOver) {
    console.log('The game ended! Nobody wins :(');
  }
   result.forEach(arr =>{
      console.log(arr.join('\t'));
  }) 
  
}
console.log(
  solve(["0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 2",
  "1 1",
  "2 1",
  "2 2",
  "0 0"])
);









/* 
if(result[0][0] === result[0][1] && result[0][1] === result[0][2]){
    console.log(`${res} wins` );
    break;
}
if(result[0][0] === result[1][0] && result[1][0] === result[2][0]){
    console.log(`${res} wins` );
    break;
}
if(result[0][2] === result[1][2] && result[1][2] === result[2][2]){
    console.log(`${res} wins` );
    break;
}
if(result[2][0] === result[2][1] && result[2][1] === result[2][2]){
    console.log(`${res} wins` );1
    break;
}
if(result[0][1] === result[1][1] && result[1][1] === result[2][1]){
    console.log(`${res} wins` );1
    break;
}
if(result[1][0] === result[1][1] && result[1][1] === result[1][2]){
    console.log(`${res} wins` );1
    break;
}
if(result[2][0] === result[1][1] && result[1][1] === result[0][2]){
    console.log(`${res} wins` );1
    break;
}
if(result[0][0] === result[1][1] && result[1][1] === result[2][2]){
    console.log(`${res} wins` );1
    break;
} */