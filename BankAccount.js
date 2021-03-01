class bankAccount {

accountNumber;

owner;

transactions;

constructor(accountNumber,owner){
  this.accountNumber = accountNumber
  this.owner = owner
  this.transactions = []
}
//the balance is computed by summing up the amounts in the transactions array
balance(){
let sum = 0
for (let i=0; i < this.transactions.length; i++) {
  sum = sum + this.transactions[i].amount;
} return sum
  }

//his method takes in a single input, the deposit amount. This method should create a new transaction representing the deposit, and add it to the transactions array.
//Push() adds one or more elements to the end of the array
//and returns the new length
deposite(atm){
  if(atm > 0){
    let deposite = new transaction(atm,"diposite");
    this.transactions.push(deposite) } else {
      console.log('Negative Balance')
        }
};

//This method takes in the payee and amount, creates a new transaction with the payee and amount, and adds the transaction to the transaction array.
charge(payee,atm){
if(this.balance()>= atm){
  let charge = new transaction((amt * -1), payee)
  this.transactions.push(charge)
} else {
  console.log("insufficient funds")
}
}
}


// represents a SINGLE transaction in account

class transaction {

date;

amount;

payee;

constructor(amount,payee){
  this.amount = amount;
  this.payee = payee;
  this.date = new Date();
}

}

let SamsAccount = new bankAccount('Sam Dunegan')

SamsAccount.deposite(200)
SamsAccount.deposite(70)
SamsAccount.deposite(30)
SamsAccount.charge(-150, "HEB")

console.log(SamsAccount)
console.log(SamsAccount.balance())