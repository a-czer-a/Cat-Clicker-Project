const catOne = document.getElementById('cat1-img');
const catTwo = document.getElementById('cat2-img');
const catNames = ['Pixie Dixie', 'Catty Patty'];
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
    } else {
        resetAndUpdateScore();
        bigImg.setAttribute('src', 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
        catName.innerHTML = `${catNames[1]}`;
    }
}

function setupEventListenersToSmallImg() {
    catOne.addEventListener('click', showBigImageAndUpdateScore);
    catTwo.addEventListener('click', showBigImageAndUpdateScore);
}

function setupEventListenersToBigImg() {
    bigImg.addEventListener('click', addClick);
}

setupEventListenersToSmallImg();
