function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;
}

BankAccount.prototype.addDeposit = function (deposit) {
  //if (this.deposit) {
    this.balance += deposit;
    //console.log(`Hi ${this.name} your balance is ${this.balance}`);
    //return true;
 //}
    //return false;
}

BankAccount.prototype.withdrawal = function (withdrawal) {
  //if (this.withdrawal) {
    this.balance -= withdrawal;
    //console.log(`Hi ${this.name} your balance is ${this.balance}`);
    //return true;
  //}
   //return false;

}


// function NewAccount (name, initialDeposit) {
//   this.name = name;
//   this.initialDeposit = initialDeposit;
// }

// function DepositWithdrawal (deposit, withdrawal) {
//   this.deposit = deposit;
//   this.withdrawal = withdrawal;
// }

function depositWithdrawalCheck(newCustomer, deposit, withdrawal){
  if (deposit === 0 && withdrawal === 0) {
    return (`Enter a Deposit or Withdrawal Amount`)
  } else if (deposit > 0 && withdrawal > 0) {
    return (`Enter only a Deposit or a Withdrawal`)
  } else if (deposit > 0) {
    newCustomer.addDeposit(deposit)
    return (`Hi ${newCustomer.name} your balance is ${newCustomer.balance}`);
  } else if (withdrawal > 0) {
    newCustomer.withdrawal(withdrawal)
    return (`Hi ${newCustomer.name} your balance is ${newCustomer.balance}`);
  } 
}


// User Interface Logic


$(document).ready(function() {

  let newCustomer

  $("form#new-account").submit(function(event) {
    event.preventDefault();
    let newName = $("#name").val();
    let initialDeposit = parseInt($("#initialDeposit").val());
    
    newCustomer = new BankAccount(newName, initialDeposit);
    //console.log(`Hi ${newCustomer.name} your balance is ${newCustomer.balance}`);

    $("div#output").append(`Hi ${newCustomer.name} your balance is ${newCustomer.balance}`)
   
  });

  $("form#depositWithdrawal").submit(function(event) {
    event.preventDefault();
    let deposit = parseInt($("#deposit").val());
    let withdrawal = parseInt($("#withdrawal").val());

    //console.log(depositWithdrawalCheck(newCustomer, deposit, withdrawal))
    let depWithdrawal = new accountBalance (deposit, withdrawal);
    // console.log(depWithdrawal);

    $("div#output2").append(`Hi ${newCustomer.name} your new balance is ${newCustomer.balance}`)
   

  });
});
