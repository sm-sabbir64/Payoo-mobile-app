//function to get input values
// function getInputValueNumber (id){
//   const inputField = document.getElementById(id)
//   const inputFieldValue = inputField.value
//   const inputFieldValueNumber = parseInt(inputFieldValue)
//   return inputFieldValueNumber;
// }

// function getInputValue(id){
//   const inputField = document.getElementById(id);
//   const inputFieldValue = inputField.value
//   return inputFieldValue;
// }

//Add money section
const validPin = 1234;
document.getElementById("add-money-btn").addEventListener("click", function (e){
    e.preventDefault();
    // console.log("add money btn connected");
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;

    const amount = parseInt(document.getElementById("add-amount").value);
    // const amount = getValueNumber('add-amount');
    const pin = parseInt(document.getElementById("pin-number").value);
    // const pinNumber = getValueNumber('pin-number')

    // console.log(bank,accountNumber,amount,pin);
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    // console.log(availableBalance);
    if (accountNumber.length < 11) {
      alert("please provide a valid account number");
      return;
    }
    if (pin !== validPin) {
      alert("please provide a valid pin number");
      return;
    }

    const totalNewAvailableBalance = amount + availableBalance;

    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
  });

//Cash Out section
const cashOutPin = 1234;
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("CashOut money btn connected");

  const agentNumber = document.getElementById("agent-number").value;
  const withdrawAmount = parseInt(
    document.getElementById("withdraw-amount").value
  );
  const withdrawPin = parseInt(document.getElementById("withdraw-pin").value);
  // console.log(bank,accountNumber,amount,pin);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );
  // console.log(availableBalance);

  if (agentNumber.length < 11) {
    alert("please provide a valid account number");
    return;
  }
  if (withdrawPin !== cashOutPin) {
    alert("please provide a valid pin number");
    return;
  }
  const cashOutNewBalance = availableBalance - withdrawAmount;
  document.getElementById("available-balance").innerText = cashOutNewBalance;
});

//Transfer Money section
const transferPin = 1234;
document.getElementById("transfer-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const transferNumber = document.getElementById("transfer-number").value;
  const transferAmount = parseInt(
    document.getElementById("transfer-amount").value
  );
  const transferPinNum = parseInt(document.getElementById("transfer-pin").value);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  if (transferNumber.length < 11) {
    alert("please provide a valid account number");
    return;
  }
  if (transferPinNum !== transferPin) {
    alert("please provide a valid pin number");
    return;
  }
  const transferNewBalance = availableBalance - transferAmount;
  document.getElementById("available-balance").innerText = transferNewBalance;
});

//Get bonus section
// const couponNumber= oshinlovesabbir;
// document.getElementById("get-bonus-btn").addEventListener("click", function (e) {
//   e.preventDefault();

//   const availableBalance = parseInt(
//     document.getElementById("available-balance").innerText);
    

 
//     const bonusNewBalance = availableBalance + 

// });

//transactions section
const transactionData = []
document.getElementById('transaction-button').addEventListener('click', function(){
  const transactionContainer = document.getElementById('transaction-container');

  for(const data of transactionContainer){
    const div = document.createElement('div')
    div.innerHTML = ``
  }
})

//togglink feature
//add-money-feature
document.getElementById("add-button").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "none"
  document.getElementById('transfer-money-parent').style.display = 'none'
  document.getElementById('get-bonus-parent').style.display = 'none'
  document.getElementById("add-money-parent").style.display = "block"
});

//cash-out-feature
document.getElementById("cash-out-button").addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display ="none"
    document.getElementById('transfer-money-parent').style.display ='none'
     document.getElementById('get-bonus-parent').style.display = 'none'
    document.getElementById("cash-out-parent").style.display = "block"
  });

//transfer-money-feature
document.getElementById("transfer-button").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "none"
  document.getElementById("cash-out-parent").style.display = "none"
   document.getElementById('get-bonus-parent').style.display = 'none'
  document.getElementById("transfer-money-parent").style.display = "block"
});


//get bonus section
document.getElementById("bonus-buttton").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "none"
  document.getElementById("cash-out-parent").style.display = "none"
  document.getElementById("transfer-money-parent").style.display = "none"
  document.getElementById('get-bonus-parent').style.display = 'block'
});