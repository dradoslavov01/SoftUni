function solve(kozunaciCount, eggsCount, kurabiiKG){

    kozunaciCount = Number(kozunaciCount);
    eggsCount = Number(eggsCount);
    kurabiiKG = Number(kurabiiKG);
   
    let kozunak = 3.2;
    let qica = 4.35;
    let kori = 12;
    let kurabii = 5.40;
    let boq = 0.15 * kori;
    
    let kozunaciPrice = kozunaciCount * kozunak;
    let eggsPrice = eggsCount * qica;
    let kurabiiPrice = kurabiiKG * kurabii;
    let boqPrice = eggsCount * kori;

    let totalPrice = kozunaciPrice + eggsPrice + kurabiiPrice + boqPrice;
    console.log(totalPrice.toFixed(2));
    


}
solve(3, 2, 3);