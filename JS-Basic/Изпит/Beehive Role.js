function solve(intelect, strength, gender) {
    intelect = Number(intelect);
    strength = Number(strength);

    if(intelect >= 80 && strength >= 80 && gender == 'female') {
        console.log('Queen Bee');
        
    }else if(intelect >= 80) {
        console.log('Repairing Bee');
        
    }else if(intelect >= 60){
        console.log('Cleaning Bee');
        
    }else if(strength >= 80 && gender == 'male') {
        console.log('Drone Bee');
        
    }else if(strength >= 60) {
        console.log('Guard Bee');
        
    }else {
        console.log('Worker Bee');
        
    }
}
solve('59',
    '82',
    'female');