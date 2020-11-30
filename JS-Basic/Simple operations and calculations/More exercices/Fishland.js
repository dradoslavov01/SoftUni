function solve(skumriqKgPrice, cacaKgPrice, palamundKg, sufridKg, midiKg){
    skumriqKgPrice = Number(skumriqKgPrice);
    cacaKgPrice = Number(cacaKgPrice);
    palamundKg = Number(palamundKg);
    sufridKg = Number(sufridKg);
    midiKg = Number(midiKg);
    
    let palamudKgPrice = skumriqKgPrice + skumriqKgPrice * 0.60;
    let palamudTotalPrice = palamundKg * palamudKgPrice;
    let sufridKgPrice = cacaKgPrice + cacaKgPrice * 0.80;
    let sufridPrice = sufridKg * sufridKgPrice;
    let miidiPrice = midiKg * 7.50;
     
    let total = palamudTotalPrice + sufridPrice + miidiPrice;
    console.log(total.toFixed(2));
    
    

}
solve(6.90, 4.20, 1.5, 2.5 ,1)
