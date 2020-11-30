function alkoholTotal(whiskyePrice, beer, wine, rakia, whiskey){

    whiskyePrice = Number(whiskyePrice);
    beer = Number(beer);
    wine = Number(wine);
    rakia = Number(rakia);
    whiskey = Number(whiskey);

   let rakiaPrice =  whiskyePrice / 2;
   let winePrice = rakiaPrice * 0.6;
   let beerPrice = rakiaPrice * 0.2;

   let rakiaTotal = rakiaPrice * rakia;
   let wineTotal = winePrice * wine;
   let beerTotal = beerPrice * beer;
   let whiskeyTotal = whiskyePrice * whiskey;

   let total = rakiaTotal + wineTotal + whiskeyTotal + beerTotal;
   console.log(total.toFixed(2));
   
}
alkoholTotal(50, 10, 3.5, 6.5, 1);