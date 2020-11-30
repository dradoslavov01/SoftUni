function list(array) {
    let friends = array.shift().split(', ');
    let comand = array.shift();
    let blacklisted = 0;
    let lost = 0;
    while (comand != 'Report') {
        comand = comand.split(' ');


        if (comand[0] == 'Blacklist' &&  friends.indexOf(comand[1]) > -1 ) {
            let index = friends.indexOf(comand[1]);
            friends.splice(index, 1, 'Blacklisted');
            console.log(`${comand[1]} was blacklisted`);
            blacklisted++;

        } else if (comand[0] == 'Blacklist' && friends.indexOf(comand[1]) <= -1) {
            console.log(`${comand[1]} was not found.`);
        }

        if (comand[0] == 'Error') {
            if (friends[Number(comand[1])] != 'Blacklisted' && friends[Number(comand[1])] != 'Lost'){
                console.log(`${friends[Number(comand[1])]} was lost due to an error.`);
                friends[Number(comand[1])] = 'Lost';
                lost++
            }   

        }

        if (comand[0] == 'Change' && comand[1] < friends.length  && comand[1] >= 0) {
            let currName = friends[Number(comand[1])]
            let index = friends.indexOf(comand[1]);
            friends.splice(index, 1, comand[2]);
            console.log(`${currName} changed his username to ${comand[2]}.`);
        }


        comand = array.shift();
    }

    console.log(`Blacklisted names: ${blacklisted}\nLost names: ${lost}\n${friends.join(' ')}`);
}

list(((["Mike, John, Eddie, William",
"Error 3",
"Error 3",
"Change 0 Mike123",
"Blacklist Eddie",
"Report"])))