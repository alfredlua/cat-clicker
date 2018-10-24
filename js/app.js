let cat = document.querySelector('.cat');
let count = document.querySelector('.count');
let numberOfClicks = 1;

cat.addEventListener('click', () => {
	count.innerHTML = numberOfClicks++;
});