class List {
    constructor() {
        this.list = [];
        this.size = this.list.length
    }
    add(num){
        this.list.push(num);
    }
    get(index){
        return this.list[index];
    }
    remove(index){
        this.list.splice(index, 1);
    }
    size() {
        
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
