function solve(input) {
    let water = Number(input.pop());
    let effort = 0;
    let totalFire = 0;
    let array = input.shift().split('#');
    
    console.log('Cells:');

        while (array.length != 0) { 

            let [fire, cell] = array.shift().split(' = ');
            
            if (fire == 'Low' && Number(cell) >= 1  && Number(cell) <= 50) {
                if (water > cell) {
                    water -= Number(cell);
                    effort += Number(cell) * 0.25;
                    totalFire += Number(cell);
                    console.log(` - ${cell}`);
                }
            } else if (fire == 'Medium' && Number(cell) >= 51  && Number(cell) <= 80) {
                if (water > cell) {
                    water -= Number(cell);
                    effort += Number(cell) * 0.25;
                    totalFire += Number(cell);
                    console.log(` - ${cell}`);
                }
            
            }else if (fire == 'High' && Number(cell) >= 81  && Number(cell) <= 125) {
                if (water > cell) {
                    water -= Number(cell);
                    effort += Number(cell) * 0.25;
                    totalFire += Number(cell);
                    console.log(` - ${cell}`);
                }
            } 
        }
    console.log(`Effort: ${effort.toFixed(2)}\nTotal Fire: ${totalFire}`);
    
}

solve([
    'High = 150#Low = 55#Medium = 86#Low = 40#High = 110#Medium = 77',
    '220'
  ])