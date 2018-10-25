"use strict";

// List cats

let nums = [1,2,3,4,5];
let names = [1,2,3,4,5];
let list = document.querySelector('.list');

// Let's loop over the numbers in our array
for (let i = 0; i < nums.length; i++) {

    // This is the number we're on...
    let num = nums[i];
    	name = names[i];

    // We're creating a DOM element for the number
    let elem = document.createElement('div');
    elem.innerHTML = `<div class="cat-${num}">
						  <div>
							  <p>${name}</p>
						  </div>
    				  	  <div class="cat">
						      <img src="images/cat-${num}.jpg" alt="A cute cat">
					  	  </div>
					  </div>`;

    // TODO: Change display when clicked
    elem.addEventListener('click', (function(numCopy) {
        return function() {
            alert(numCopy);
        };
    })(num));

    list.appendChild(elem);
};