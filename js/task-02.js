const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const elements = ingredients.map((ingredient) => {
  const listItem = document.createElement("li");
  listItem.classList.add(`item`);
  listItem.textContent = ingredient;
  return listItem;
 }
)

// console.log(elements);

listEl.append(...elements);
console.log(listEl);

