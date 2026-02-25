

const purchaseBtn = document.getElementById("purchase-btn");
const errorPara = document.getElementById("error");

function purchase() {
  console.log("button clicked") 
  errorPara.textContent = "TRY AGAIN Something feels wrong!!!"

}
purchaseBtn.addEventListener("click", purchase );