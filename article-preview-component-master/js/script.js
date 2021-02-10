const button = document.querySelector(".share-button");
const sharecard = document.querySelector(".card-content-autor-share");
const shareIcon = document.querySelector(".share-icon");

button.addEventListener("click", (event) => {
    // Swap between main and second div showing
    sharecard.classList.toggle("hidden");
    shareIcon.classList.toggle("share-icon-active");
    button.classList.toggle("button-active"); 
});
/*
button.addEventListener('click', () => {
    if (button.classList.contains('hidden')){

        button.classList.remove('hidden')

    }
}
    */


/*
if (document.documentElement.clientWidth <= 900){

    document.getElementById("ToggleBar").style.display = 'none';
}
*/


