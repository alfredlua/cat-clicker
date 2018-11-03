"use strict";

/*
*  Model
*/

let model = {
    currentCat: 0,
    cats: [
        {
            name: "Meow", 
            count: 0,
            image: "images/Meow.jpg"
        },
        {
            name: "Meh", 
            count: 0,
            image: "images/Meh.jpg"
        },
        {
            name: "Huh", 
            count: 0,
            image: "images/Huh.jpg"
        },
        {
            name: "Yay", 
            count: 0,
            image: "images/Yay.jpg"
        },
        {
            name: "What", 
            count: 0,
            image: "images/What.jpg"
        }
        ]
};

/*
*  Octopus
*/

let octopus = {
    init: () => {
        model.currentCat = model.cats[0];
        listView.init();
        displayView.init();
    },

    // Get the array of cats
    getCats: () => {
        return model.cats;
    },

    // Get the currently selected cat
    getCurrentCat: () => {
        return model.currentCat;
    },

    // Change the currently selected cat
    setCurrentCat: (index) => {
        model.currentCat = model.cats[index];
    },

    // Increase the click counter
    increaseCount: () => {
        model.currentCat.count++;
        displayView.render();
    }
};

/*
*  List View
*/

let listView = {
    init: () => {
        // Store the DOM elements for easy access later
        listView.list = document.getElementById('list');

        // Render the list
        listView.render();
    },

    render: () => {
        // Loop through the list of cats
        for (let i=0; i<octopus.getCats().length; i++) {
            let cats = octopus.getCats();
            let cat = cats[i];

            // List cats
            let elem = document.createElement('div');
            elem.innerHTML = `<p>${cat.name}</p>`;

            // Add event listener to select a cat
            elem.addEventListener('click', ((catCopy, index) => {
                return () => {
                    octopus.setCurrentCat(index);
                    displayView.render();
                };
            })(cat, i));

            // Append the cat name onto the list
            listView.list.append(elem);
        };

    }
};

/*
*  Display View
*/

let displayView = {
    init: () => {
        // Store the DOM elements for easy access later
        displayView.catName = document.getElementById('cat-name');
        displayView.catImage = document.getElementById('cat-image');
        displayView.catCount = document.getElementById('cat-count');

        // Add event listener to record clicks
        displayView.catImage.addEventListener('click', octopus.increaseCount);

        // Render the selected cat
        displayView.render();
    },

    render: () => {
        // Get the currently selected cat through the octopus
        let currentCat = octopus.getCurrentCat();

        // Set the name of selected cat
        displayView.catName.innerHTML = `${currentCat.name}`;
        // Set the image of selected cat
        displayView.catImage.src = currentCat.image;
        // Show the number of clicks
        displayView.catCount.innerHTML = `<p>Number of clicks: ${currentCat.count}</p>`;
    }
};

// Make the app start
octopus.init();