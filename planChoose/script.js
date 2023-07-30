const midleftContainer = document.getElementsByClassName('midleftContainer');
const midrightContainer = document.getElementsByClassName('midrightContainer');

const rightImage = document.getElementById('rightImage');
const leftImage = document.getElementById('leftImage');

let leftRemoved = false;
// Function to remove the leftImage
function removeLeftImage() {
    if(leftRemoved == false){
        leftImage.classList.add('hidden');
        leftRemoved = true;
    }
}


rightImage.addEventListener('click', () => {
    if (leftRemoved == true) {
        // Reinsert the leftImage back into the midleftContainer
        leftImage.classList.remove('hidden');
        leftRemoved = false;
    }
    else{
        removeLeftImage();
    }
});