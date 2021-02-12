class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(name, salary, possition, department) {
        
        if(!obj.hasOwnProperty(department)) {
            obj[department] = {};
        }
        if(obj.hasOwnProperty(department)) {
            obj[department].employee = [name];
        }
        
        this.departments.push(obj)
    }
    
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c);
