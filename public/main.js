let HST = require("./HST");
let oHst = new HST();
let nTotal = 0;

document.getElementById("amountForm").addEventListener("submit", (evt) =>{
    evt.preventDefault();
    let nAmount = document.getElementById("amount").value;
    document.getElementById("amount").value = "";
    let sProv = document.getElementById("province").value;
    let oAmount = document.createElement("p");
    oAmount.innerHTML = nAmount;
    document.getElementById("amounts").append(oAmount);

    // add amount to total
    nTotal += Number(nAmount);
    //calculate HST
    let nHst = oHst.calculate(nTotal, sProv);
    //calculate new total
    let nTotalWithHST = nTotal + nHst;
    //display
    document.getElementById("hst").innerHTML = nHst;
    document.getElementById("total").innerHTML = nTotalWithHST;

});