"use strict"

const mainItemEl = document.querySelectorAll('.item');
// console.log(mainItemEl);
console.log(`Categories:`, mainItemEl.length);

console.log(`Category:`, mainItemEl[0].querySelector('h2').textContent);
console.log(`Elements:`, mainItemEl[0].querySelector('ul').children.length);

console.log(`Category:`, mainItemEl[1].querySelector('h2').textContent);
console.log(`Elements:`, mainItemEl[1].querySelector('ul').children.length);

console.log(`Category:`, mainItemEl[2].querySelector('h2').textContent);
console.log(`Elements:`, mainItemEl[2].querySelector('ul').children.length);

