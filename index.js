const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const errMsg = document.querySelector("#err-msg");

checkBtn.addEventListener("click", function validateBillAndCashAmount() {
  if (billAmount.value > 0) {
    alert("Hi")
  }
  else {
    alert("by")
  };
})
