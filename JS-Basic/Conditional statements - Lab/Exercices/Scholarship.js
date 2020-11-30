function solve(income, score, minimumSalary){
    income = Number(income);
    score = Number(score);
    minimumSalary = Number(minimumSalary);

    let socialScholarship = 0;
    let excellenceScholarship = 0;

    if ((income < minimumSalary) && (score > 4.5)) {
        socialScholarship = minimumSalary * 0.35;
    } 
    if (score >= 5.5) {
        excellenceScholarship = score * 25;
    }

    if (socialScholarship === 0 && excellenceScholarship === 0) {
        console.log("You cannot get a scholarship!");
    } else if (socialScholarship > excellenceScholarship) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    } else {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellenceScholarship)} BGN`);
    }
}
solve(300.00,
    5.65,
    420.00)