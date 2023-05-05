const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.getElementById('ingredients');
let liEl = [];
for (const ingredient of ingredients) {
  const liRef = document.createElement('li');
  liRef.textContent = ingredient;
  liRef.classList.add('item');
  liEl.push(liRef);
};
ulRef.append(...liEl);

