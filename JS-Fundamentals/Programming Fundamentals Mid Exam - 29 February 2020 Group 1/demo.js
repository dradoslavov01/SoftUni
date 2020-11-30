function solve(inputArr){
    let copiedArray = [...inputArr];
    let rawKey = copiedArray.shift();
    let element = copiedArray.shift();
 
    // while(element != 'Generate') {

    //     let command = element.split('>>>');
        
    //     if(command[0] === 'Slice') {
    //         rawKey.slice(command[1], command[2]);
    //     }

    //     element = copiedArray.shift();
    // }
    

   }

solve([
'abcdefghijklmnopqrstuvwxyz',
'Slice>>>2>>>6',
'Flip>>>Upper>>>3>>>14',
'Flip>>>Lower>>>5>>>7',
'Contains>>>def',
'Contains>>>deF',
'Generate'
]);