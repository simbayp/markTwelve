const angleOne = document.querySelector("#angle1");
const angleTwo = document.querySelector("#angle2");
const angleThree = document.querySelector("#angle3");
const btnAngles = document.querySelector(".btn-angles");
const output = document.querySelector(".output-angles");

function isTriangle() {
  if (+angleOne.value <= 0 || +angleTwo.value <= 0 || +angleThree.value <= 0) {
    output.innerText = "Angles cannot be 0 or negative.";
  } else {
    if (+angleOne.value + +angleTwo.value + +angleThree.value === 180) {
      output.innerText = "Yes! These angles can correspond to a triangle.";
    } else {
      output.innerText = "No! These angles can NOT correspond to triangle.";
    }
  }
}

btnAngles.addEventListener("click", isTriangle);
