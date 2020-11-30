function solve(radius,heigth) {

    let volume = (1/3) * Math.PI * (radius * radius) * heigth;
    let surfaceArea = Math.PI * radius * (radius + Math.sqrt((radius * radius) + (heigth * heigth)))

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${surfaceArea.toFixed(4)}`);

}
solve(3.3,
    7.8)


