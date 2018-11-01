"use strict";

$(function() {

    /*
    *  Model
    */

    let model = {
        currentCat: 0,
        cats: [
            {name: "Meow", count: 0},
            {name: "Meh", count: 0},
            {name: "Huh", count: 0},
            {name: "Yay", count: 0},
            {name: "What", count: 0}
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

        getCats: () => {
            return model.cats;
        },

        getCurrentCat: () => {
            return model.currentCat;
        }
    };

    /*
    *  List View
    */

    let listView = {
        init: () => {
            this.list = $('.list');
            this.render();
        },

        render: () => {
            octopus.getCats().forEach((cat) => {
                // List cats
                let elem = document.createElement('div');
                elem.innerHTML = `<p>${cat.name}</p>`;

                // Add event listener to select a cat
                elem.addEventListener('click', ((catCopy) => {
                    return () => {
                        //displayView.render();
                    };
                })(cat));

                this.list.append(elem);
            });

        }
    };

    /*
    *  Display View
    */

    let displayView = {
        init: () => {
            this.catName = $('.cat-name');
            this.catImage = $('.cat-image');
            this.catCount = $('.cat-count');

            this.render();
        },

        render: () => {
            this.catName.textContent = `<p>test</p>`;
        }
    };

    octopus.init();

}());