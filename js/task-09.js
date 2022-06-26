function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const colorBtn = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');


colorBtn.addEventListener('click', onColorBtnClick); 

function onColorBtnClick() {
  
  body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = body.style.backgroundColor;  
  
}