

// add event listener---------------------------------------------------------->
// for only phone---
document.getElementById("phone-plus-btn").addEventListener("click", function(){
   phoneInputValue = phoneInputValue + 1;
   phoneInputField.value = phoneInputValue;

   phoneTotalPrice();

   subTotal();
   let taxPrice = subTotal() * 0.1;
    taxPriceElement.innerText = taxPrice.toFixed(1);

    const totalPrice = subTotal() + taxPrice;
    totalPriceElement.innerText = totalPrice;
});

document.getElementById("phone-minus-btn").addEventListener("click", function(){
    phoneInputValue = phoneInputValue - 1;
   phoneInputField.value = phoneInputValue;

   phoneTotalPrice();

   subTotal();
   let taxPrice = subTotal() * 0.1;
    taxPriceElement.innerText = taxPrice.toFixed(1);

    const totalPrice = subTotal() + taxPrice;
    totalPriceElement.innerText = totalPrice;
});

// for phone case----
document.getElementById("case-plus-btn").addEventListener("click", function(){
     caseInputValue = caseInputValue + 1;
    caseInputField.value = caseInputValue;

    caseTotalPrice();

    subTotal();
    let taxPrice = subTotal() * 0.1;
    taxPriceElement.innerText = taxPrice.toFixed(1);

    const totalPrice = subTotal() + taxPrice;
    totalPriceElement.innerText = totalPrice;
 });

document.getElementById("case-minus-btn").addEventListener("click", function(){
    caseInputValue = caseInputValue - 1;
    caseInputField.value = caseInputValue;
    
    caseTotalPrice();

    subTotal();
    let taxPrice = subTotal() * 0.1;
    taxPriceElement.innerText = taxPrice.toFixed(1);

    const totalPrice = subTotal() + taxPrice;
    totalPriceElement.innerText = totalPrice;

 });

                       
 document.getElementById("phone-remove-item").addEventListener("click", function(){
   let phoneItem = document.getElementById("phone-item");
   
   let singlePhonePrice = document.getElementById("single-phone-price").innerText;
   let totalPrice = document.getElementById("subtotal-price").innerText;

   let currentTotal = parseInt(totalPrice) - parseInt(singlePhonePrice);
   document.getElementById("subtotal-price").innerText = currentTotal;
   phoneItem.style.display = "none";
 });

 document.getElementById("case-remove-item").addEventListener("click", function(){
   let caseItem = document.getElementById("case-item");
   
   const singleCasePrice = document.getElementById("single-case-price").innerText;
   let totalPrice = document.getElementById("subtotal-price").innerText;

   let currentTotal = parseInt(totalPrice) - parseInt(singleCasePrice);
   document.getElementById("subtotal-price").innerText = currentTotal;
   caseItem.style.display = "none";
 });