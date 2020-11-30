function solve(input) {
    let floors = Number(input.shift());
    let rooms = Number(input.shift());
   
    for(let i = floors; i >= 1; i--) {
        let floor = ''
        for(let j = 0; j < rooms; j++){
            if(i == floors) {
                floor += `L${i}${j} `

            }else if(i % 2 == 0){
                floor += `O${i}${j} `
                
            }else {
                floor += `A${i}${j} `
            }
        }
        console.log(floor);
    }
     
}
solve([ '6', '4' ]);