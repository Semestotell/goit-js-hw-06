let valueVal = Number(document.querySelector('#value').textContent);

let counterValue = document.querySelector('#value');

const decBtn = document.querySelector('#counter').firstElementChild;
const incBtn = document.querySelector('#counter').lastElementChild;

incBtn.addEventListener('click', () => {
    valueVal += 1;
    counterValue.innerText = valueVal;
})
decBtn.addEventListener('click', () => {
    valueVal -= 1;
    counterValue.innerText = valueVal;
})