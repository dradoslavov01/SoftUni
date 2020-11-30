function solve(inputArr) {
    let booksName = inputArrshift().split('&');    
    let commad = inputArr.shift();
    let isChekBook = false;
    let cheked = '';

    while (commad != 'Done') {

        let splited = commad.split('|');

        if(splited[0] == 'Add Book') {
            booksName.unshift(splited[1])

        } else if(splited[0] === 'Take Book') {
            for (let i = 0; i < booksName.length; i++) {
                
                if(booksName[i] == splited[1]) {
                    booksName[i].splice(i, 1)
                }
            }
        } else if (splited[0] == 'Swap Book') {
            let swap = booksName[splited[1]];
            booksName[booksName(splited[1])] = booksName[booksName(splited[2])];
            booksName[splited[2]] = swap;

        } else if (splited[0] == 'Insert Book') {
            booksName.push(splited[1])

        } else if (splited[0] == 'Check Book') {

            for (let i = 0; i < booksName.length; i++) {
                cheked = booksName[splited[1]]
                isChekBook = true;
            }
        }





        commad = inputArr.shift();
    }

    if(isChekBook) {
        return cheked;
    }

    return booksName;

    
}

console.log(solve([
    'Anna Karenina&Heart of Darkness&Catch-22& The Stranger',
    'Add Book | David Copperfield',
    'Add Book | One Thousand and One Nights',
    'Swap Books | One Thousand and One Nights | Catch-22',
    'Take Book | David Copperfield',
    'Insert Book | The Stories of Anton Chekhov',
    'Check Book | 17',
    'Done',
    ''
  ]));

  