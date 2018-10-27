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

    // We're creating a DOM element for each cat
    let cat = document.createElement('div');
    cat.innerHTML = `<div class="cat-${name}">
						  <div>
							  <p>${name}</p>
						  </div>
    				  	  <div class="cat-image">
						      <img src="images/${name}.jpg" alt="A cute cat">
					  	  </div>
					  </div>`;

    // Change displayed cat when clicked
    cat.addEventListener('click', ((numCopy) => {
        return () => {
        	let selectedCat = document.createElement('div');
        	display.innerHTML = '';
            selectedCat.innerHTML = `<div class="cat-${name}">
        						    <div>
        							    <p>${name}</p>
        						    </div>
            				  	    <div class="cat-image">
        						        <img src="images/${name}.jpg" alt="A cute cat">
        					  	    </div>
        					  	    <div>
        					  	    	<p>Number of clicks: <span class="count">${numCopy}</span></p>
        					  	    </div>
        					  	</div>`;

        	display.appendChild(selectedCat);

        	// Add event listener for clicks
        	selectedCat.onclick = () => {
        		numCopy++;
        		document.querySelector('.count').innerHTML = numCopy;
        	};
        };
    })(num));

    list.appendChild(cat);
};