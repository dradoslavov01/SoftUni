function solve(input) {
    let groupsCount = Number(input.shift());

    let totalPeople = 0;
    let musala = 0;
    let monbal = 0;
    let kilimandjaro = 0;
    let K2 = 0;
    let everest = 0;
    for (let i = 1; i <= groupsCount; i++) {
        let peopleInGroup = Number(input.shift());
        totalPeople += peopleInGroup;

        if(peopleInGroup <= 5) {
            musala += peopleInGroup;
        }else if (peopleInGroup >= 6 && peopleInGroup <= 12) {
            monbal += peopleInGroup;
        }else if (peopleInGroup >= 13 && peopleInGroup <= 25) {
            kilimandjaro += peopleInGroup;
        }else if (peopleInGroup >= 26 && peopleInGroup <= 40) {
            K2 += peopleInGroup;
        }else{
            everest += peopleInGroup;
        }
    }
    let musalaPercent = musala / totalPeople * 100;
    let monbalPercent = monbal / totalPeople * 100;
    let kilimandjaroPercent = kilimandjaro / totalPeople * 100;
    let K2Percent = K2 / totalPeople * 100;
    let everestPercent = everest / totalPeople * 100;
    
    console.log(`${musalaPercent.toFixed(2)}% \n${monbalPercent.toFixed(2)}% \n${kilimandjaroPercent.toFixed(2)}% \n${K2Percent.toFixed(2)}% \n${everestPercent.toFixed(2)}%`);
    
}
solve([ '5', '25', '41', '31', '250', '6' ]);