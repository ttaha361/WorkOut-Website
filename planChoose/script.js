const midleftContainer = document.getElementsByClassName('midleftContainer');
const midrightContainer = document.getElementsByClassName('midrightContainer');

const rightImage = document.getElementById('rightImage');
const leftImage = document.getElementById('leftImage');

const leftText = document.getElementById('lightplanText');
const rightText = document.getElementById('muscleplanText');

let leftRemoved = false;
let rightRemoved = false;


function removeLeftImage() {
    if(leftRemoved == false){
        leftImage.classList.add('hidden');
        setTimeout(function() {
            leftText.classList.add('visible');
        leftRemoved = true;
        }, 400);
    }
}


rightImage.addEventListener('click', () => {
    if (leftRemoved == true) {
        leftImage.classList.remove('hidden');
        leftText.classList.remove('visible');
        leftRemoved = false;
    }
    else if (rightRemoved == false){
        removeLeftImage();
    }
});

rightText.addEventListener('click', () => {
    if (leftRemoved == true) {
        leftImage.classList.remove('hidden');
        leftText.classList.remove('visible');
        leftRemoved = false;
    }
    else if(rightRemoved == false){
        removeLeftImage();
    }
});


function removeRightImage() {
    if(rightRemoved == false){
        rightImage.classList.add('hidden');
        setTimeout(function() {
            rightText.classList.add('visible');
        rightRemoved = true;
        }, 400);
    }
}


leftImage.addEventListener('click', () => {
    if (rightRemoved == true) {

        rightImage.classList.remove('hidden');
        rightText.classList.remove('visible');
        rightRemoved = false;
    }
    else if (leftRemoved == false){
        removeRightImage();
    }
});

leftText.addEventListener('click', () => {
    if (rightRemoved == true) {

        rightImage.classList.remove('hidden');
        rightText.classList.remove('visible');
        rightRemoved = false;
    }
    else if (leftRemoved == false){
        removeRightImage();
    }
});


