function greening(finalPrice, discount){
    let sum = finalPrice * 7.61;
    let pro = sum * 0.18;
    let finalPr = sum - pro;
    console.log(`The final price is: ${finalPr.toFixed(2)} lv.`);
    console.log(`The discount is: ${pro.toFixed(2)} lv.`);
    
}
greening(540);