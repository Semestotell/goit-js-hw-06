const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector("#ingredients");
const li = ingredients.forEach(ingredient => {
  const items = document.createElement("li");
  items.innerHTML = ingredient;
  ul.insertAdjacentElement("afterbegin", items);
});
const liClass = document.querySelectorAll("li");
liClass.forEach(list => list.classList.add('item'))
