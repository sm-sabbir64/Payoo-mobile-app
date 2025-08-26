// console.log('Script Connected')

//login button functionality
document.getElementById("loginButton").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = "01873558803";
  const pinNumber = "1234";

  const mobileNumberValue = document.getElementById("mobile-number").value;
  // const mobileNumberValueConverted = parseInt(mobileNumberValue);

  const pinNumberValue = document.getElementById("pin-number").value;
  // const pinNumberValueConverted = parseInt(pinNumberValue);

  // console.log(mobileNumberValueConverted, pinNumberValueConverted);
  console.log(mobileNumberValue, pinNumberValue);
  if (mobileNumberValue === mobileNumber && pinNumberValue === pinNumber) {
    // console.log('all value matched')
    window.location.href = "./home.html";
  } else {
    alert("Invalid credentials");
  }
});
