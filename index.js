const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const errMsg = document.querySelector("#err-msg");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const nextBtn = document.querySelector("#next-btn");
const hide = document.querySelector(".hide")
const hideErr = document.querySelector(".hide-err");
const firstTr = document.querySelector("#firstTr")
console.log(firstTr);
const hideTable = document.querySelector("table");
const returnMsg = document.querySelector("#returnMsg");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
hideTable.style.display = "none";
returnMsg.style.display = "none";

checkBtn.addEventListener("click", function validateBillAndCashAmount() {
  hideErrMsg();
  if (Number(billAmount.value) > 0) {

    if (Number(cashGiven.value) >= Number(billAmount.value)) {
      const amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
      calculateChange(amountToBeReturned);
      hideTable.style.display = "inline-block";
      returnMsg.style.display = "inline-block"

    }

    else {

      showMsg("Pay the full amount of bill😐");
      hideTable.style.display = "none";
      returnMsg.style.display = "none"

    }

  } else {
    showMsg("The value should be greater than 0");
  };
});

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

    amountToBeReturned = amountToBeReturned % availableNotes[i];

    if (numberOfNotes > 0) {
      noOfNotes[i].classList.add("notesColor")
    }
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


// 1st WE did it display none inside css
nextBtn.addEventListener("click", function checkNumber() {
  if (Number(billAmount.value) > 0) {
    hide.style.display = "block";
    hideErr.style.display = "none";
  } else {
    hide.style.display = "none";
    hideErr.style.display = "block";
  }
})
