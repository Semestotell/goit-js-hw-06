let inputElement = document.querySelector('#name-input');
inputElement.addEventListener('input', onInputChange);

let outputElement = document.querySelector('#name-output');

function onInputChange(event) {
    inputElement = event.currentTarget.value;

    inputElement === '' ? 'Anonymous!'  : (outputElement.innerText = inputElement.trim());
}