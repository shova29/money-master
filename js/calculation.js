//get input value from the user
function getInputValue(inputId) {
  let inputField = document.getElementById(inputId);
  let amountValue = parseInt(inputField.value);
  // inputField.value = "";
  return amountValue;
}

// handle income event handler
document
  .getElementById("calculate-button")
  .addEventListener("click", function () {
    //get user amount
    calculateExpenses();
  });

function calculateExpenses() {
  let incomeAmount = getInputValue("income-input");
  let foodCost = getInputValue("food-cost");
  let rentCost = getInputValue("rent-cost");
  let clothesCost = getInputValue("clothes-cost");

  //update on the html

  if ((!isNaN(incomeAmount) && incomeAmount > 0) || incomeAmount == "") {
    document.getElementById("error-message").innerText = "";
    if ((!isNaN(foodCost) && foodCost >= 0) || foodCost == "") {
      document.getElementById("error-message").innerText = "";
      if ((!isNaN(rentCost) && rentCost >= 0) || rentCost == "") {
        document.getElementById("error-message").innerText = "";
        if ((!isNaN(clothesCost) && clothesCost >= 0) || clothesCost == "") {
          document.getElementById("error-message").innerText = "";
          let totalExpenses = foodCost + rentCost + clothesCost;
          let balanceAmount = incomeAmount - totalExpenses;
          if (incomeAmount > totalExpenses) {
            document.getElementById("total-expenses").innerText = totalExpenses;
            document.getElementById("balance-amount").innerText = balanceAmount;
          } else {
            document.getElementById("total-expenses").innerText =
              "Oops! Too much spend on expenses rather than income!!!";
            document.getElementById("balance-amount").innerText =
              "Dear, you are out of balance";
          }
        } else {
          document.getElementById("error-message").innerText =
            "Please enter a valid Input";
        }
      } else {
        document.getElementById("error-message").innerText =
          "Please enter a valid Input";
      }
    } else {
      document.getElementById("error-message").innerText =
        "Please enter a valid Input";
    }
  } else {
    document.getElementById("error-message").innerText =
      "Please enter a valid Input";
  }
}

// handle isaving event handler
document.getElementById("save-button").addEventListener("click", function () {
  //get user amount
  savingMoney();
});
function savingMoney() {
  let incomeAmount = parseInt(document.getElementById("income-input").value);
  let savingAmount = parseInt(document.getElementById("saving-input").value);
  let remainingAmount = parseInt(
    document.getElementById("balance-amount").innerText
  );
  if (!isNaN(remainingAmount)) {
    if ((!isNaN(savingAmount) && savingAmount >= 0) || savingAmount == "") {
      // document.getElementById("saving-input").innerText = "";
      let savingsAmount = (savingAmount / 100) * incomeAmount;
      let remainingBalance = remainingAmount - savingsAmount;
      console.log(savingsAmount);
      if (savingsAmount <= remainingAmount) {
        document.getElementById("savings-amount").innerText = savingsAmount;
        document.getElementById("remaining-balance").innerText =
          remainingBalance;
      } else {
        document.getElementById("savings-amount").innerText =
          "You don't have enough money to save";
        document.getElementById("remaining-balance").innerText =
          remainingAmount;
      }
    } else {
      alert("Please enter a valid Input");
    }
  } else {
    document.getElementById("savings-amount").innerText =
      "You don't have enough money to save";
    document.getElementById("remaining-balance").innerText =
      "You have no money";
  }
}
