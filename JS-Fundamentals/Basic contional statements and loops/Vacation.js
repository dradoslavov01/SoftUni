function solve(groupOfPeople, typeOfGroup, dayOfWeek) {
    let studentsPrice, businessPrice, regularPrice, freeStay;
    if(typeOfGroup == 'Students' && dayOfWeek == 'Friday') {
        studentsPrice = groupOfPeople * 8.45;
        
        if(groupOfPeople >= 30) {
            studentsPrice *= 0.85;
        }
        console.log(`Total price: ${studentsPrice.toFixed(2)}`);
    } else if (typeOfGroup == 'Students' && dayOfWeek == 'Saturday') {
        studentsPrice = groupOfPeople * 9.8;
        
        if(groupOfPeople >= 30) {
            studentsPrice *= 0.85;
        }
        console.log(`Total price: ${studentsPrice.toFixed(2)}`);
    }  else if (typeOfGroup == 'Students' && dayOfWeek == 'Sunday') {
        studentsPrice = groupOfPeople * 10.46;
        
        if(groupOfPeople >= 30) {
            studentsPrice *= 0.85;
        }
        console.log(`Total price: ${studentsPrice.toFixed(2)}`);
    } 

    if (typeOfGroup == 'Business ' && dayOfWeek == 'Friday') {
        businessPrice = 10.9 * groupOfPeople;
        
        if (groupOfPeople >= 100) {
            freeStay = 10 * 10.9;
            businessPrice -= freeStay;
        }
        console.log(`Total price: ${businessPrice.toFixed(2)}`);
    } else if (typeOfGroup == 'Business ' && dayOfWeek == 'Saturday') {
        businessPrice = 15.6 * groupOfPeople;
        
        if (groupOfPeople >= 100) {
            freeStay = 10 * 15.6;
            businessPrice -= freeStay;
        }
        console.log(`Total price: ${businessPrice.toFixed(2)}`);
    } else if (typeOfGroup == 'Business ' && dayOfWeek == 'Sunday') {
        businessPrice = 16 * groupOfPeople;
        
        if (groupOfPeople >= 100) {
            freeStay = 10 * 16;
            businessPrice -= freeStay;
        }
        console.log(`Total price: ${businessPrice.toFixed(2)}`);
    }

    if (typeOfGroup == 'Regular' && dayOfWeek == 'Friday') {
        regularPrice = groupOfPeople * 15;

        if (groupOfPeople >= 10 && groupOfPeople <= 20) {
            regularPrice *= 0.95;
        }
        console.log(`Total price: ${regularPrice.toFixed(2)}`);
    } else if (typeOfGroup == 'Regular' && dayOfWeek == 'Saturday') {
        regularPrice = groupOfPeople * 20;

        if (groupOfPeople >= 10 && groupOfPeople <= 20) {
            regularPrice *= 0.95;
        }
        console.log(`Total price: ${regularPrice.toFixed(2)}`);
    } else if (typeOfGroup == 'Regular' && dayOfWeek == 'Sunday') {
        regularPrice = groupOfPeople * 22.5;

        if (groupOfPeople >= 10 && groupOfPeople <= 20) {
            regularPrice *= 0.95;
        }
        console.log(`Total price: ${regularPrice.toFixed(2)}`);
    }

}
solve(40,
    "Regular",
    "Saturday")