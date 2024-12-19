const fishImg = '<img src="/intro_to_DOM/imgs/Fish.jpg" alt="" width="150" height="180">';
const appleImg = '<img src="/intro_to_DOM/imgs/apple.jpg" alt="" width="150" height="180">';
const egsImg = '<img src="/intro_to_DOM/imgs/egs.jpg" alt="" width="150" height="180">';
const field = document.getElementById("cards");


function addFishHandler() {
    field.innerHTML += fishImg;
}
function addAppleHandler() {
    field.innerHTML += appleImg;
}
function addEgsHandler() {
    field.innerHTML += egsImg;
}



