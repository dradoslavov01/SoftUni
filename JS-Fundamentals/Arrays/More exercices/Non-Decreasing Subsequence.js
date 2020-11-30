function solve(array) {
    
    
    for (let i = 0; i < array.length ; i++) {
       let bigger = i + 1;
       let biggerNum = array.filter(function(solve){
           return bigger < solve
       })
       
    }

   
}
solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);