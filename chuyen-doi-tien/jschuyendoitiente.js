function quydoi() {
let amount= document.getElementById("amount").value;
let fromCurrency= document.getElementById("fromCurrency").value;
let toCurrency= document.getElementById("toCurrency").value;
let N = (amount/toCurrency)*fromCurrency;
alert("so tien nhan duoc" + N)
}