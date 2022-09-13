const sideOne = document.querySelector("#side1");
const sideTwo = document.querySelector("#side2");
const sideThree = document.querySelector("#side3");
const btnArea = document.querySelector(".btn-area");
const output = document.querySelector(".output-area");

function calArea() {
  if (+sideOne.value <= 0 || +sideTwo.value <= 0 || +sideThree.value <= 0) {
    output.innerText = "Sides cannot be 0 or negative.";
  } else {
    let numSideOne = +sideOne.value;
    let numSideTwo = +sideTwo.value;
    let numSideThree = +sideThree.value;
    if (
      numSideOne + numSideTwo >= numSideThree &&
      numSideTwo + numSideThree >= numSideOne &&
      numSideThree + numSideOne >= numSideTwo
    ) {
      let semiPerimeter = (numSideOne + numSideTwo + numSideThree) / 2;
      let area = Math.sqrt(
        semiPerimeter *
          (semiPerimeter - numSideOne) *
          (semiPerimeter - numSideTwo) *
          (semiPerimeter - numSideThree)
      );
      output.innerText = `The value of area of the triangle is: ${area.toFixed(
        2
      )}`;
    } else {
      output.innerText = "These sides don't form a triangle.";
    }
  }
}

btnArea.addEventListener("click", calArea);
