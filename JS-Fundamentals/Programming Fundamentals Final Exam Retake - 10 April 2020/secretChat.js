function solve(input) {
    let message = input.shift();
    let line = input.shift()
    while (line != 'Reveal') {
        let [command, ...tokens] = line.split(':|:');

        switch(command) {
            case 'InsertSpace':
                let index = Number(tokens[0]);
                let first = message.substring(0, index);
                let second = message.substring(index);
                message = first + ' ' + second;
                console.log(message);
                break;
            case 'Reverse':
                let sub = tokens[0]
                if (message.includes(sub)) {
                   let indexof = message.indexOf(sub);
                   let first = message.substring(0, indexof);
                   let second = message.substring(indexof)
                   let reversed = second.split('').reverse().join('');
                   message = first + reversed
                   console.log(message);
                } else {
                    console.log('error');
                }
                break;
            case 'ChangeAll':
                let str = tokens[0];
                let replacement = tokens[1]
                message = message.split(str).join(replacement);
                console.log(message);

        }

        line = input.shift()
    }
    console.log(`You have a new text message: ${message}`);
}

solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ])