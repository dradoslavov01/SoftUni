function solve(inputArr) {

    let items = inputArr.shift().split(', ');
    let commands = inputArr.shift();

    while (commands != 'Craft!') {
        let [ command, item ] = commands.split(' - ');
        let [ oldItem, newItem ] = item.split(':')
        
        if (command == 'Collect' && !items.includes(item)) {
            items.push(item);
        } 
        if (command == 'Drop' && items.includes(item)) {
            drop(items, item)
        }
        if (command.includes('Combine') && items.includes(oldItem)) {
            combineItems(items, oldItem, newItem);
        }
        if(command == 'Renew' && items.includes(item)) {
            renew(items, item)
        }

        commands = inputArr.shift()
    }

    

    function drop(array, index) {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];

            if (element == index) {
                array.splice(i, 1)
            }
            
        }
    }

    function combineItems(array, oldItem, newItem) {
        for (let i = 0; i < items.length; i++) {
            const element = items[i];

            if(element == oldItem) {
                items.splice(i + 1, 0, newItem);
                break;
            }
            
        }
    }

    function renew(array, index) {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if(element == index) {
                let ele = array.splice(i, 1);
                let str = ele.toString();
                array.push(str);
            }
            
        }
    }

    console.log(items.join(', '));

}

solve([ 'Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!' ])