//Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

//Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//Оновлюй інтерфейс новим значенням змінної counterValue.

const valueRef = document.getElementById('value');
let counterValue = 0;

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});
decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});

