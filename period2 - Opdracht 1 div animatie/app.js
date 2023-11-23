// function om div van links naar right laten bewegen

function moveDiv(){
    const movingDiv = document.getElementById('myblock');
    const currentPosition = parseInt(movingDiv.style.left) || 0;
    const newPosition = currentPosition + 10;

    movingDiv.style.left = newPosition +'px';

    // stop eind

    const screenWidth = window.innerWidth;
    if ( newPosition + 50 > screenWidth){
        clearInterval(intervalId);
    }
}

// interval van 100 miliseconds om de moveDiv-functie periodiek te roepen
const intervalId = setInterval(moveDiv,100);