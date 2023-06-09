
const inputRef = document.querySelector('#validation-input');
const dataLength = Number(inputRef.getAttribute('data-length'));

inputRef.addEventListener('blur', onCheckInputValidation);

function onCheckInputValidation(event) {
  const currentLength = event.currentTarget.value.trim().length
  if (currentLength === dataLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
};