let fontBar = document.querySelector('#font-size-control');
let text = document.querySelector('#text');
fontBar.addEventListener("input", () => {
    const font = fontBar.value;
    text.style.fontSize = font + "px"
    })
