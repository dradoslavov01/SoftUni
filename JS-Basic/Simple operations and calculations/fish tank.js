function solve(length, width, height, percent) {
 
    let volume = length * width * height;
    let total = volume * 0.001;
 
    let percentConv = percent * 0.01;
    let totalLitre = total * (1 - percentConv); // замени 0.17 със percentConv
   
    console.log(totalLitre.toFixed(3));
 
}
