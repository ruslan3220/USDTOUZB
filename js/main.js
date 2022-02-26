let elForm = document.querySelector(".header__form");
let elFormControl = document.querySelector(".form-control");
let elFormSelect = document.querySelector(".form-select");
let elResult = document.querySelector(".result");

let USD = 10864;
let EURO = 12247;
let RUBL = 130;

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let USDTOUZB = `${elFormControl.value * USD} So'm`;
  let EUROTOUZB = `${elFormControl.value * EURO} So'm`;
  let RUBLTOUZB = `${elFormControl.value * RUBL} So'm`;
  if (elFormSelect.value == "usd") {
    elResult.textContent = USDTOUZB;
  } else if (elFormSelect.value == "euro") {
    elResult.textContent = EUROTOUZB;
  } else if (elFormSelect.value == "rubl") {
    elResult.textContent = RUBLTOUZB;
  }
});
