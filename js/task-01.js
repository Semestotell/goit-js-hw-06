const list = document.querySelectorAll('li.item');
console.log(`Number of categories: ${list.length}`);
const ul = document.querySelectorAll('#categories>li');
ul.forEach(cat => {
console.log(`Category: ${cat.firstElementChild.textContent}`);
console.log(`Numbers: ${cat.lastElementChild.children.length}`)
});