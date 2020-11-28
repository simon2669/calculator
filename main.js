const inputNumbers = document.querySelectorAll('.input__number');
const output = document.querySelector('.calculator__output');
(function () {
  inputNumbers.forEach((item) => item.addEventListener('click', function () {
    output.textContent = item.textContent;
  }))
})();