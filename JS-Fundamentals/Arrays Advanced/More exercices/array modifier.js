function solve(arr) {
  
    let array = arr.shift().split(' ').map(Number);
    let command = arr.shift().split(' ');
 

 
            let temp = array[command[1]];
            array[Number(command[1])] = array[Number(command[2])];
            array[command[2]] = temp;
            
      
    console.log(arra);
    
}

solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ])