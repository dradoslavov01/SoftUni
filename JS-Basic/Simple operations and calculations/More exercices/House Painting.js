function solve(x, y ,h){
    x = Number(x);
    y = Number(y);
    h = Number(h);

    //sides
    let sideWall = x * y;
    let window  = 1.5;
    let windowArea = Math.pow(window, 2);
    let twoSides = (2 * sideWall) - (2 * windowArea);
    let backSide = Math.pow(x, 2);
    let entrance = 1.2 * 2;
    let backFrondSide = (2 * backSide) - 2.4;
    let totalArea = twoSides + backFrondSide;
    let greenPaint = totalArea / 3.4;

    //roof
    let tworectanglesOfRoof = 2 *(x*y);
    let twoRectangles = 2 * (x * h / 2)
    let area = tworectanglesOfRoof + twoRectangles;
    let redPaint = area / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
    

}
solve(6, 10, 5.2);