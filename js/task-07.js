
const fontSizeControlRef = document.getElementById('font-size-control');
let textSizeRef = document.getElementById('text');


fontSizeControlRef.addEventListener('input', onSizeChange);

function onSizeChange(event) {
  textSizeRef.style.fontSize = `${event.currentTarget.value}px`
};

//Завдання 7 - потрібно в початковий фонтсайз спана поставити 
//початкове значення інпута, щоб не було скачків розміру текста 
//при пересуванні повзунка.