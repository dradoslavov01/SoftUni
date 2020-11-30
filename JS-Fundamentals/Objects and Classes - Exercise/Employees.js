function solve (inputArr) {
    
   class Person  {

       constructor(name) {
           this.name = name;
           this.number = name.length;
       }

       print() {
           return `Name: ${this.name} -- Personal Number: ${this.number}`
       }
   }

   inputArr = inputArr.map(x => {
       return new Person(x)
   })
   .forEach(el => {
       console.log(el.print());
   });
   
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])