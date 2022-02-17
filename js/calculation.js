//get input value from the user
function getInputValue(inputId) {
  let inputField = document.getElementById(inputId);
  let amountValue = parseInt(inputField.value);
  //   let amountValue;
  //   checking value is string and negative number or not
  //   if (isNaN(amountValue) || amountValue < 0) {
  //     alert("Please enter a valid amount");
  //   }
  //   //   checking the value is empty or not
  //   if (inputField.value != "") {
  //     amountValue = parseInt(inputField.value);
  //   } else {
  //     // inputValue = parseInt(input.value);
  //     amountValue = 0;
  //   }

  // inputField.value = "";
  return amountValue;
}
