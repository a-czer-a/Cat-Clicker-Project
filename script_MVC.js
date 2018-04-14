// MODEL 

const model = {
    clickedCat: null,

    adminModeOn: false,

    cats: [
        {
            clicks: 0,
            name: 'Pixie Dixie',
            imgSrc: 'https://images.pexels.com/photos/33537/cat-animal-cat-portrait-mackerel.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            id: 0
        },
        {
            clicks: 0,
            name: 'Catty Patty',
            imgSrc: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            id: 1
        },
        {
            clicks: 0,
            name: 'Ulala',
            imgSrc: 'https://images.pexels.com/photos/747795/pexels-photo-747795.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            id: 2
        },
        {
            clicks: 0,
            name: 'Waffer',
            imgSrc: 'https://images.pexels.com/photos/416195/pexels-photo-416195.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            id: 3
      },
        {
            clicks: 0,
            name: 'Powder Puff',
            imgSrc: 'https://images.pexels.com/photos/358464/pexels-photo-358464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            id: 4
      }
    ],

    smallCats: [
        {
            elem: document.getElementById("cat1-img"),
            id: 0
        },
        {
            elem: document.getElementById("cat2-img"),
            id: 1
        },
        {
            elem: document.getElementById("cat3-img"),
            id: 2
        },
        {
            elem: document.getElementById("cat4-img"),
            id: 3
        },
        {
            elem: document.getElementById("cat5-img"),
            id: 4
        }
            ]
};

// OCTOPUS 

const octopus = {
    init: function () {
        model.clickedCat = model.cats[0];
        adminView.hide();
        view.init();
        smallView.init();
        adminView.init();
    },

    getClickedCat: function () {
        return model.clickedCat;
    },

    getSmallCats: function () {
        return model.smallCats;
    },

    getBigCats: function () {
        return model.cats;
    },

    setClickedCat: function (id) {
        model.clickedCat = model.cats[id];
    },

    addClick: function () {
        model.clickedCat.clicks++;
        view.update();
        adminView.update();
    },

    showAdminMode: function () {
        if (model.adminModeOn === false) {
            model.adminModeOn = true;
            adminView.show();
        } else if (model.adminModeOn === true) {
            model.adminModeOn = false;
            adminView.hide();
        }
    },

    cancelAdminMode: function () {
        adminView.hide();
    },

    saveAdminMode: function () {
        model.clickedCat.name = adminView.nameInput.value;
        model.clickedCat.clicks = adminView.clicksInput.value;
        model.clickedCat.imgSrc = adminView.urlInput.value;

        view.update();
        adminView.hide();
        smallView.update(model.clickedCat.id);
    }
};

// VIEWS

const view = {

    init: function () {

        // pointers to DOM elements
        this.catImg = document.getElementById('cat-img-big');
        this.catName = document.getElementById('cat-name');
        this.numberOfClicks = document.getElementById('clicks');

        this.catImg.addEventListener('click', function () {
            octopus.addClick();
        })
        this.update();
    },

    update: function () {
        const cat = octopus.getClickedCat();

        this.numberOfClicks.innerHTML = cat.clicks;
        this.catName.innerHTML = cat.name;
        this.catImg.setAttribute('src', cat.imgSrc);
    },
};

// Small images view

const smallView = {
    init: function () {
        const smallCatsImg = octopus.getSmallCats();
        const bigCatsImg = octopus.getBigCats();
        const smallImg = document.getElementsByClassName('small-img');

        for (let i = 0; i < smallCatsImg.length; i++) {
            const elem = smallImg[i];
            const catId = smallCatsImg[i].id;

            elem.addEventListener('click', function () {
                octopus.setClickedCat(catId);
                view.update();
                adminView.update();
            });
        }
    },

    update: function (id) {
        const catNameSmall = document.getElementsByClassName('cat-name-small');
        const urlSmall = document.getElementsByClassName('small-img');
        catNameSmall[id].textContent = model.clickedCat.name;
        urlSmall[id].setAttribute('src', model.clickedCat.imgSrc);
    }
};

const adminView = {
    init: function () {
        const adminBtn = document.getElementById('admin-button');
        const panel = document.getElementById('panel');
        const cancelBtn = document.getElementById('cancel-button');
        const saveBtn = document.getElementById('save-button');

        adminBtn.addEventListener('click', function () {
            octopus.showAdminMode();
        });

        cancelBtn.addEventListener('click', function () {
            octopus.cancelAdminMode();
        });

        saveBtn.addEventListener('click', function () {
            octopus.saveAdminMode(model.clickedCat.id);
        });

        this.update();
    },

    show: function () {
        panel.style.display = 'block';
    },

    hide: function () {
        panel.style.display = 'none';
    },

    update: function () {
        const clickedCat = octopus.getClickedCat();
        this.nameInput = document.getElementById('cat-name-input');
        this.clicksInput = document.getElementById('clicks-input');
        this.urlInput = document.getElementById('url-input');

        this.nameInput.value = clickedCat.name;
        this.clicksInput.value = clickedCat.clicks;
        this.urlInput.value = clickedCat.imgSrc;
    }
}

octopus.init();
