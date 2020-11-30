function solve(magnoli, zumbuli, rozi, kaktusi, giftPrice){
    magnoli = Number(magnoli);
    zumbuli = Number(zumbuli);
    rozi = Number(rozi);
    kaktusi = Number(kaktusi);
    giftPrice = Number(giftPrice);

    
    let money = (magnoliPrice = magnoli * 3.25) + (zumbuliPrice = zumbuli * 4) + (roziPrice = rozi * 3.5) + (kaktusiPrice = kaktusi * 8);
    let danuk = money * 0.05;
    let winMoney = money - danuk;

    if(giftPrice > winMoney){
        console.log(`She will have to borrow ${Math.ceil(giftPrice - winMoney)} leva.`);
        
    }else{
        console.log(`She is left with ${Math.floor(winMoney - giftPrice)} leva.`);
        
    }

}
solve(2,
    3,
    5,
    1,
    50)