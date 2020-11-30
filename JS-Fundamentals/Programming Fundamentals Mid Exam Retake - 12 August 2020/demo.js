function list(array){
    let friends = array.shift().split(', ');
    let blacklist = 0;
    let lost = 0;

    for(let i = 0;i < array.length;i++){
        let commands = array[i].split(' ');
        let command = commands[0];
 
 
        if(command === 'Report'){
            break;
        }
 
        if(command === 'Blacklist'){
            let names = commands[1];
 
            if(friends.includes(names)){
                let index = friends.indexOf(names);
                friends.splice(index,1,'Blacklisted');
                console.log(`${names} was blacklisted.`);
                blacklist++;
 
            }else{
                console.log(`${names} was not found.`)
            }
        }
 
        if(command === 'Error'){
            let nameIndex = friends[Number(commands[1])];
 
            if(nameIndex !== 'Blacklisted' && nameIndex !== 'Lost'){
                let index = friends.indexOf(nameIndex);
                friends.splice(index,1,'Lost');
                console.log(`${nameIndex} was lost due to an error.`);
                lost++;
            }
        }
 
        if(command === 'Change'){
            let index = Number(commands[1]);
            let newName = commands[2];
            let currentName = friends[index];
 
            if(friends.length > index && index >= 0){
                friends.splice(index,1,newName);
                console.log(`${currentName} changed his username to ${newName}.`)
            }
        }
 
    }
    console.log(`Blacklisted names: ${blacklist}`);
    console.log(`Lost names: ${lost}`);
    console.log(friends.join(' '));
}
 
 
 
 
 
 
 
 
 
 
 
 
 
list((["Mike, John, Eddie, William",
"Error 3",
"Error 3",
"Change 0 Mike123",
"Blacklist Eddie",
"Report"]))