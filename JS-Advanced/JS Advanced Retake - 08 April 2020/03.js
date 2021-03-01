class Bank {
  constructor(bankName) {
    this.bankName = bankName;
    this.allCustomers = [];
  }
  
  get bankName() {
    return this._bankName;
  }
  set bankName(value) {
    this._bankName = value;
  }

  newCustomer (customer) {
      let {firstName, lastName, personalId} = customer;
      this.allCustomers.forEach(el => {
          if(el.firstName == firstName) {
              throw new Error(`${firstName} ${lastName} is already our customer!`)
          }
      })

      this.allCustomers.push(customer);
      return customer
  }

  depositMoney (personalId, amount) {

      amount = Number(amount);
      const id = [];
      this.allCustomers.forEach(el => {
          id.push(el.personalId);
      })
      if(!id.includes(personalId)) {
          throw new Error(`We have no customer with this ID!`)
      }

      this.allCustomers.forEach(el => {
        if(el.personalId === personalId) {
            if(!el.hasOwnProperty('totalMoney')) {
              el.totalMoney = [];
            }
            el.totalMoney.push(amount);
        }
        
    })
    return this.allCustomers;
  }
}

//--------------------------------------------------

let bank = new Bank("SoftUni Bank");

console.log(
  bank.newCustomer({
    firstName: " Svetlin",
    lastName: " Nakov",
    personalId: 6233267,
  })
);
console.log(
  bank.newCustomer({
    firstName: " Mihaela",
    lastName: " Mileva",
    personalId: 4151596,
  })
);


bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

// console.log(bank.withdrawMoney(6233267, 125));

// console.log(bank.customerInfo(6233267));
