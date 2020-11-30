function solve(input) {
    let favoriteBook = input.shift();
    let bookCapacity = Number(input.shift());

    let counter = 0;
    let bookIsFound = false;
    let currentBook = input.shift();

    while (counter < bookCapacity) {

        if(currentBook === favoriteBook){
            bookIsFound = true;
            break;
        }
        counter++;
        currentBook = input.shift();
    }
     if(bookIsFound == false){
         console.log("The book you search is not here!");
         console.log(`You checked ${counter} books.`);
         
         
     }else{
         console.log(`You checked ${counter} books and found it.`);
         
     }

}
solve([ 'Troy', '8', 'Stronger', 'Life Style', 'Troy' ])