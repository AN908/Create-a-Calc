//Calculating
//Input
document.getElementById("cat-price-BTN").addEventListener("click", catPricer);

function catPricer() {
  //Input
  var catyears = +document.getElementById("catyear").value;
  var spendingFood = +document.getElementById("foodspent").value;
  var toySpending = +document.getElementById("toyspend").value;
  var vetchecks = +document.getElementById("vetspend").value;
  var furniturespending = +document.getElementById("furniturespend").value;
  var adoptionfee = +document.getElementById("catfee").value;
  //Process
  catyears = 1000 - 25 * catyears;
  spendingFood = spendingFood - 560;
  vetchecks = 165 * vetchecks;
  catSpending =
    catyears +
    spendingFood +
    toySpending +
    vetchecks +
    furniturespending +
    adoptionfee;
  //Output
  document.getElementById("catspent").innerHTML = `$ ${catSpending}`;
}

//Neuture
document.getElementById("neuturedBTN").addEventListener("click", neuture);
let catmoney = +document.getElementById("catspent");

function neuture() {
  //Input
  var catyears = +document.getElementById("catyear").value;
  var spendingFood = +document.getElementById("foodspent").value;
  var toySpending = +document.getElementById("toyspend").value;
  var vetchecks = +document.getElementById("vetspend").value;
  var furniturespending = +document.getElementById("furniturespend").value;
  //Process
  catyears = 1000 - 25 * catyears;
  spendingFood = spendingFood - 560;
  vetchecks = 165 * vetchecks;
  catSpending =
    catyears + spendingFood + toySpending + vetchecks + furniturespending + 960;
  //Output
  document.getElementById("catspent").innerHTML = ` $ ${catSpending}`;
}

//Clear Button
document.getElementById("clearBTN").addEventListener("click", clearAll);

function clearAll() {
  document.getElementById("catspent").innerHTML = "------";
}
