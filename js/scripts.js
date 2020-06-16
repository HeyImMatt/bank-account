function BankAccount() {
  this.deposit = [];
}

BankAccount.prototype.addDeposit = function () {
  this.deposit.push(deposit);
}


function NewAccount (name, initialDeposit) {
  this.name = name;
  this.initialDeposit = initialDeposit;
}

function DepositWithdrawal (deposit, withdrawal) {
  this.deposit = deposit;
  this.withdrawal = withdrawal;
}



// User Interface Logic


$(document).ready(function() {
  $("form#new-account").submit(function(event) {
    event.preventDefault();
    let newName = $("#name").val();
    let initialDeposit = parseInt($("#initialDeposit").val());

    let newCustomer = new NewAccount(newName, initialDeposit);
    console.log(newCustomer);
   
  });

  $("form#depositWithdrawal").submit(function(event) {
    let deposit = parseInt($("#deposit").val());
    let withdrawal = parseInt($("#withdrawal").val());

    let depWithdrawal = new DepositWithdrawal(deposit, withdrawal);
    console.log(depWithdrawal);

  });
});