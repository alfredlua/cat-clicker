"use strict";

// Declarations

let nameOne = "Meow";
let nameTwo = "Meh";
let catOneName = document.querySelector('.cat-one-name');
let catTwoName = document.querySelector('.cat-two-name');

let catOne = document.querySelector('.cat-one-image');
let catTwo = document.querySelector('.cat-two-image');
let catOneCount = document.querySelector('.cat-one-count');
let catTwoCount = document.querySelector('.cat-two-count');
let catOneClicks = 1;
let catTwoClicks = 1;

// Update cats' name
catOneName.innerHTML = nameOne;
catTwoName.innerHTML = nameTwo;

// Track and update click counters

catOne.addEventListener('click', () => {
	catOneCount.innerHTML = catOneClicks++;
});

catTwo.addEventListener('click', () => {
	catTwoCount.innerHTML = catTwoClicks++;
});