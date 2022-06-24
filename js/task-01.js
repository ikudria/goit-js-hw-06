

const mainListEl = document.querySelector("#categories");
console.log(`Categories:`, mainListEl.children.length);

const mainItemsEl = document.querySelectorAll('.item');

mainItemsEl.forEach(function (mainItemEl) {
    const headerEl = mainItemEl.querySelector('h2');
    console.log(`Category:`, headerEl.textContent);
  
    const subListEl = mainItemEl.querySelector('ul');
    console.log(`Elements:`, subListEl.children.length);
});