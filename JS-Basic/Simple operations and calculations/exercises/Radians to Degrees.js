function transfer(radians){
    radians = Number(radians);
     let gradus = radians * 180 / Math.PI;
     console.log(gradus.toFixed(0));
     
}
transfer(3.1416);