let inputVal = document.querySelector("#validation-input");

let totalLenght = inputVal.getAttribute("data-length");
let intTotalLenght = parseInt(totalLenght, 10);

inputVal.oninput = function() {
  if (inputVal.value.length === intTotalLenght) {
    inputVal.classList.remove("invalid");
    inputVal.classList.add("valid");
  }
  if (inputVal.value.length === 0) {
    inputVal.classList.remove("valid");
    inputVal.classList.remove("invalid");
  }
  if (inputVal.value.length !== intTotalLenght && inputVal.value.length !== 0) {
    inputVal.classList.add("invalid");
  }
};