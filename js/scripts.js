function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;
}

BankAccount.prototype.addDeposit = function (deposit) {
  if (this.deposit) {
    this.balance += deposit;
    console.log(`Hi ${this.name} your balance is ${this.balance}`);
    return true;
  }
    return false;
}

BankAccount.prototype.withdrawal = function (withdrawal) {
  if (this.withdrawal) {
    this.blance -= withdrawal;
    console.log(`Hi ${this.name} your balance is ${this.balance}`);
    return true;
  }
    return false;

}


// function NewAccount (name, initialDeposit) {
//   this.name = name;
//   this.initialDeposit = initialDeposit;
// }

// function DepositWithdrawal (deposit, withdrawal) {
//   this.deposit = deposit;
//   this.withdrawal = withdrawal;
// }


// User Interface Logic


$(document).ready(function() {
  $("form#new-account").submit(function(event) {
    event.preventDefault();
    let newName = $("#name").val();
    let initialDeposit = parseInt($("#initialDeposit").val());

    let newCustomer = new BankAccount(newName, initialDeposit);
    console.log(newCustomer);
   
  });

  $("form#depositWithdrawal").submit(function(event) {
    event.preventDefault();
    let deposit = parseInt($("#deposit").val());
    let withdrawal = parseInt($("#withdrawal").val());

    
    // let depWithdrawal = new accountBalance (deposit, withdrawal);
    // console.log(depWithdrawal);

  });
});
