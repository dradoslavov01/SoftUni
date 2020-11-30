function solve(hallLenght, hallWidth, wardrob){

    let hallLenghtCm = Number(hallLenght) * 100;
    let hallWidthCm = Number(hallWidth) * 100;
    let wardrobCm = Number(wardrob) * 100;
    

    let hall = hallLenghtCm * hallWidthCm;
    let wardrobSize = Math.pow(wardrobCm, 2);
    let bench = hall / 10;
    let freeSpace = hall - wardrobSize - bench;
    

    let dancers = freeSpace / (40 + 7000);
    console.log(Math.floor(dancers));

}
solve(50, 25, 2);