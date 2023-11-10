const buttonPlus = document.querySelector('.plus');
const resultEl = document.querySelector('.result');
let counter = 0;
resultEl.textContent = counter;
buttonPlus.addEventListener('click', function (e) {
    counter += 3;
    resultEl.textContent = counter;
});