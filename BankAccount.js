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

}


deposite(atm){

}


charge(payee,atm){

}

}


class transaction {

date;

amount;

payee;

constructor(amount,payee){
  this.amount = amount;
  this.payee = payee;
  this.date = new date();
}

}