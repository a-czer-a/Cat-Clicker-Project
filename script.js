const catOne = document.getElementById('cat1-img');
const catTwo = document.getElementById('cat2-img');
const catThree = document.getElementById('cat3-img');
const catFour = document.getElementById('cat4-img');
const catFive = document.getElementById('cat5-img');


const catNames = ['Pixie Dixie', 'Catty Patty', 'Ulala', 'Waffer', 'Powder Puff'];
const catId = [catOne, catTwo, catThree, catFour, catFive];

const bigImg = document.getElementById('cat-img-big');

let click = 0;
const numberOfClicks = document.getElementById('clicks');

function addClick() {
    click++;
    displayScore();
}

function displayScore() {
    if (click === 1) {
        numberOfClicks.innerHTML = ` ${click} time`;
    } else {
        numberOfClicks.innerHTML = ` ${click} times`;
    }
}

function resetAndUpdateScore() {
    click = 0;
    displayScore()
}

function showBigImageAndUpdateScore(event) {
    const clickedCatImg = event.target;
    const catName = document.getElementById('cat-name');
    const bigImgContainer = document.getElementById('big-img-container');

    setupEventListenersToBigImg();
    bigImgContainer.style.visibility = 'visible';

    if (clickedCatImg === catOne) {
        resetAndUpdateScore();
        bigImg.setAttribute('src', 'https://images.pexels.com/photos/33537/cat-animal-cat-portrait-mackerel.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
        catName.innerHTML = `${catNames[0]}`;
    } else if (clickedCatImg === catTwo) {
        resetAndUpdateScore();
        bigImg.setAttribute('src', 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
        catName.innerHTML = `${catNames[1]}`;
    } else if (clickedCatImg === catThree) {
        resetAndUpdateScore();
        bigImg.setAttribute('src', 'https://images.pexels.com/photos/747795/pexels-photo-747795.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
        catName.innerHTML = `${catNames[2]}`;
    } else if (clickedCatImg === catFour) {
        resetAndUpdateScore();
        bigImg.setAttribute('src', 'https://images.pexels.com/photos/416195/pexels-photo-416195.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
        catName.innerHTML = `${catNames[3]}`;
    } else {
        resetAndUpdateScore();
        bigImg.setAttribute('src', 'https://images.pexels.com/photos/358464/pexels-photo-358464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
        catName.innerHTML = `${catNames[4]}`;
    }
}

function setupEventListenersToSmallImg() {
    for (let i = 0; i < catId.length; i++) {
        let choosenCat = catId[i];
        choosenCat.addEventListener('click', showBigImageAndUpdateScore);
    }
}

//catOne.addEventListener('click', showBigImageAndUpdateScore);
//catTwo.addEventListener('click', showBigImageAndUpdateScore);
//catThree.addEventListener('click', showBigImageAndUpdateScore);
//catFour.addEventListener('click', showBigImageAndUpdateScore);
//catFive.addEventListener('click', showBigImageAndUpdateScore);
//}

function setupEventListenersToBigImg() {
    bigImg.addEventListener('click', addClick);
}

setupEventListenersToSmallImg();
