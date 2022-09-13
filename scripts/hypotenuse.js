const base = document.querySelector("#base");
const height = document.querySelector("#height");
const btnHypo = document.querySelector(".btn-hypo");
const output = document.querySelector(".output-hypo");

function calHypotenuse() {
  if (+base.value <= 0 || +height.value <= 0) {
    output.innerHTML = "Base and Height cannot be 0 or negative.";
  } else {
    let numBase = +base.value;
    let numHeight = +height.value;
    let hypotenuse = Math.sqrt(numBase ** 2 + numHeight ** 2);
    output.innerText = `The value of Hypotenuse is: ${hypotenuse.toFixed(2)}`;
  }
}

btnHypo.addEventListener("click", calHypotenuse);
