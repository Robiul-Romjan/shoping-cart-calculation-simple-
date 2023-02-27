// get elements------------------------------------------------------------->
// for only phone----
const phoneInputField = document.getElementById("phone-input-field");
const phoneInputValueString = phoneInputField.value;
let phoneInputValue = parseInt(phoneInputValueString);

const singlePhonePriceField = document.getElementById("single-phone-price");
const singlePhonePriceString = singlePhonePriceField.innerText;
let singlePhonePrice = parseFloat(singlePhonePriceString);


// for phone case -------
const caseInputField = document.getElementById("case-input-field");
const caseInputValueString = caseInputField.value;
let caseInputValue = parseInt(caseInputValueString);

const singleCasePriceField = document.getElementById("single-case-price");
const singleCasePriceString = singleCasePriceField.innerText;
let singleCasePrice = parseFloat(singleCasePriceString);

// for subtotal, tax and total--------
const subTotalPrice = document.getElementById("subtotal-price");
const taxPriceElement = document.getElementById("tax-price"); 
const totalPriceElement = document.getElementById("total-price");


function phoneTotalPrice(){
    let phonePriceTotal = phoneInputValue * 1219;
   singlePhonePriceField.innerText = phonePriceTotal;
   return phonePriceTotal;
}

function caseTotalPrice(){
    let casePriceTotal = caseInputValue * 59;
    singleCasePriceField.innerText = casePriceTotal;
    return casePriceTotal;
}

function subTotal(){
    const subtotal = phoneTotalPrice() + caseTotalPrice();
   subTotalPrice.innerText = subtotal;
   return subtotal;
}