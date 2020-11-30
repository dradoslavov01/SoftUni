function solve(collections) {
    let output = ' ';
    let isRemove = false;
    
    for (let i = 0; i < collections.length; i++) {

         if (collections[i] == 'add') {
            output += i + 1 + ' ';
        } else if(collections[i] === 'remove' && collections[i + 1] !== 'remove'){
            output = i - (i - 1) + ' ';
        } else if (collections[i] == collections[i + 1]){
            isRemove = true;
        }
        
        
    }
    console.log(output);

    if(isRemove) {
        console.log('Empty');
    }
    

}
solve(['remove', 'remove', 'remove'])