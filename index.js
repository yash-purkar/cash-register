const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const errMsg = document.querySelector("#err-msg");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const hide = document.querySelector(".hide")
// console.log(hide);



const availableNotes = [2000, 500, 100, 20, 10, 5, 1]

checkBtn.addEventListener("click", function validateBillAndCashAmount() {
  hideErrMsg();
  if (Number(billAmount.value) > 0) {

    if (Number(cashGiven.value) >= Number(billAmount.value)) {
      const amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
      calculateChange(amountToBeReturned);


    } else {

      showMsg("Give At least bill amount, we are not taking more than bill amount.")
    }

  } else {
    showMsg("The value should be greater than 0")
  };
});

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

    amountToBeReturned = amountToBeReturned % availableNotes[i];

    noOfNotes[i].innerText = numberOfNotes;
  }
}

function showMsg(msg) {
  errMsg.style.display = "block"
  errMsg.innerText = msg
}

function hideErrMsg() {
  errMsg.style.display = "none";
}