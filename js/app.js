"use strict";

// List cats

let names = ["Meow", "Meh", "Huh", "Yay", "What"];
let list = document.querySelector('.list');
let display = document.querySelector('.display');

// Let's loop over the numbers in our array
for (let i = 0; i < names.length; i++) {

    // This is the name we're on...
    let name = names[i];
    let num = 0;

    // We're creating a DOM element for the number
    let elem = document.createElement('div');
    elem.innerHTML = `<div class="cat-${name}">
						  <div>
							  <p>${name}</p>
						  </div>
    				  	  <div class="cat-image">
						      <img src="images/${name}.jpg" alt="A cute cat">
					  	  </div>
					  </div>`;

    // Change displayed cat when clicked
    elem.addEventListener('click', ((nameCopy, numCopy) => {
        return () => {
            display.innerHTML = `<div class="cat-${nameCopy}">
        						    <div>
        							    <p>${nameCopy}</p>
        						    </div>
            				  	    <div class="cat-image">
        						        <img src="images/${nameCopy}.jpg" alt="A cute cat">
        					  	    </div>
        					  	    <div>
        					  	    	<p>Number of clicks: ${numCopy}</p>
        					  	    </div>
        					  	</div>`;
        	// TODO: Add event listener for clicks
        	let catImage = document.querySelector(".cat-image");
        	catImage.addEventListener('click', (numCopy) => {
        		numCopy++;
        	});
        };
    })(name, num));

    list.appendChild(elem);
};