function convert(fahrenheit){
    fahrenheit  = Number(fahrenheit);

    let result = fahrenheit * 1.8 + 32;

    console.log(result.toFixed(2));
    
}
convert(25);
