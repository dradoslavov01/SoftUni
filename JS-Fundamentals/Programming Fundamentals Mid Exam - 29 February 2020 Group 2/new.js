function solve(inputArr){
   let copiedArr = [...inputArr];
   let list = copiedArr.shift().split('!');


   function commander(split){
       
      if(split[0] == 'Urgent' && list.includes(split[1]) != true){
          list.unshift(split[1]);
      }
      if(split[0] == 'Unnecessary' && list.includes(split[1])){
          for(let i = copiedArr.length - 1; i >= 0; i--){
            copiedArr.splice(i, 1);
          } 
      }
      if(split[0] == 'Correct' && list.includes(split[1])){
          let joined = copiedArr.join(' ');
          joined.replace(split[1], split[2]);
          let splited = joined.split(" ");
          copiedArr = splited;
          
      }
      if(split[0] = 'Rearrange' && list.includes(split[1])){
        for(let j = copiedArr.length - 1; j >= 0; j--){
            let exists = copiedArr.splice(j, 1);
            copiedArr.push(exists);
          } 
      }
      if(split[0] == "Go"){
        return copiedArr;
      }
      
}

copiedArr.forEach(el => {
    el.split(' ');
    console.log(commander(el));
});


}



solve([
    'Tomatoes!Potatoes!Bread',
    'Unnecessary Milk',
    'Urgent Tomatoes',
    'Go Shopping!'
  ]);