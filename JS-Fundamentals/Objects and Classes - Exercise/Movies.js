function solve(inputArr) {

    
    
    
    function Movie(name, director, date){
        this.name = name;
        this.director = director;
        this.date = date;

        this.create = function(){
            return {
                name: this.name,
                director: this.director,
                date: this.date

            } 
        }
    }
    function check(command){
        command = inputArr.shift().split(' ');
        let movie = null;
        let director = null;
        let date = null;

        if(command[0] == 'addMovie'){
            movie += command[1];
        }
        if(command[0] == movie && command[1] == 'directedBy'){
            director += command[2];
        }
        if(command[0] == movie && command[1] == 'onDate'){
            date += command[2];
        }
        else if(movie != null && director != null && date != null){
            return new Movie(movie, director, date);
        }

    }
    
        inputArr.map(element => {
            console.log(check(element));
        });

}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])