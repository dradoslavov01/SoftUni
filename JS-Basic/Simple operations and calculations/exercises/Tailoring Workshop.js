function workshop(tables, tablesLength, tablesWidth){

    tables = Number(tables);
    tablesLength = Number(tablesLength);
    tablesWidth = Number(tablesWidth);

    let tableCloths = tables * (tablesLength + 2 * 0.30) * (tablesWidth + 2 * 0.30);
    
    let boxCloths = tables * Math.pow(tablesLength/2, 2);

    let dollars = tableCloths * 7 + boxCloths * 9;
    let leva = dollars * 1.85;

    console.log(`${dollars.toFixed(2)} USD`);
    console.log(`${leva.toFixed(2)} BGN`);
    

}
    
workshop(5, 1, 0.5);
