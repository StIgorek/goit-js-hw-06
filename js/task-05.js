//Напиши скрипт, який під час набору тексту в інпуті input#name-input
//(подія input), підставляє його поточне значення в span#name - output.
//Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".


const inputRef = document.getElementById('name-input');
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener('input', onInputChange);
function onInputChange(event) {
  outputRef.textContent = event.target.value.trim()
    ? event.target.value.trim() : 'Anonymous';
};
