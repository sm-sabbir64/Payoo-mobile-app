//Add money section
const validPin =1234
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e){
    e.preventDefault();
    console.log("add money btn connected");
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pin = parseInt(document.getElementById("pin-number").value);

    // console.log(bank,accountNumber,amount,pin);
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    // console.log(availableBalance);

    if(accountNumber.length < 11 ){
        alert('please provide a valid account number');
        return;
    }

    if(pin !== validPin){
        alert('please provide a valid pin number')
        return
    }

    const totalNewAvailableBalance = amount + availableBalance;

    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
  });


  //Cash Out section 
  const cashOutPin = 1234
document
  .getElementById("withdraw-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("CashOut money btn connected");
    const bank = document.getElementById("bank").value;
    const agentNumber = document.getElementById("agent-number").value;
    const withdrawAmount = parseInt(document.getElementById("withdraw-amount").value);
    const withdrawPin = parseInt(document.getElementById("withdraw-pin").value);

    // console.log(bank,accountNumber,amount,pin);
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    // console.log(availableBalance);

    if(agentNumber.length < 11 ){
        alert('please provide a valid account number');
        return;
    }

    if(withdrawPin !== cashOutPin){
        alert('please provide a valid pin number')
        return
    }

    const cashOutNewBalance = availableBalance - withdrawAmount;

    document.getElementById("available-balance").innerText =
      cashOutNewBalance;
  });



//togglink feature
    //add money section togglink
   document.getElementById("add-button")
      .addEventListener('click', function(){
        document.getElementById("cash-out-parent").style.display = "none"
        document.getElementById("add-money-parent").style.display = "block"
  })

   //cash-out section togglink
  document.getElementById('cash-out-button')
  .addEventListener('click', function(){
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"
  })