// Buttons & Globals
let startButton = document.getElementById("start");
let againButton = document.getElementById("again");
againButton.style.display = "none";
let yayButton = document.getElementById("yay");

function startBtn () {
    colorChangeTimer(3000);
    startButton.style.display = "none";
};

function againBtn () {
    startButton.style.display = "block";
    againButton.style.display = "none";
    square.style.backgroundColor = "rgb(66, 66, 66)";
    finishP1 = false;
    finishP2 = false;
    cheaterP1 = true;
    cheaterP2 = true;
    secOne = 0;
    hsOne = 0;
    secTwo = 0;
    hsTwo = 0;
    pOneTimerH.innerHTML = 0;
    pTwoTimerH.innerHTML = 0;
    cheaterPlayer1.innerHTML = "";
    cheaterPlayer2.innerHTML = "";
    winWin.innerHTML = "";
};

// Player 1 
let pOneTimerH = document.getElementById("p1hundreds");
let cheaterPlayer1 = document.getElementById("p1cheater");

// Player 2
let pTwoTimerH = document.getElementById("p2hundreds");
let cheaterPlayer2 = document.getElementById("p2cheater");

// Random Function
function random(seed) {
    return Math.floor(Math.random() * Math.floor(seed));
};

// Change color on square
let square = document.getElementById("square");

function squareColorChanger() {
    square.style.backgroundColor = "salmon";
};

// Timer 
function colorChangeTimer (base) {
    let rngTime = random(5000);
    setTimeout(squareColorChanger, base + rngTime);
    setTimeout(startFunction, base + rngTime);
};

// Counter Player 1
let hsOne = 0;
let hsP1;

let hundredsCounterP1 = function () {

    pOneTimerH.innerHTML = hsOne;
    hsOne++

};

// Counter Player 2
let hsTwo = 0;
let hsP2;

let hundredsCounterP2 = function () {
    pTwoTimerH.innerHTML = hsTwo;
    hsTwo++
};

// Start
function startFunction() {
    cheaterPlayer1.innerHTML = "";
    cheaterPlayer2.innerHTML = "";
    cheaterP1 = false;
    cheaterP2 = false;
    hsP2 = setInterval(hundredsCounterP2, 10);
    hsP1 = setInterval(hundredsCounterP1, 10);
};

// Stop
function stopFunction(player) {
    if (player === 1) {
        clearInterval(hsP1)
    }
    if (player === 2) {
        clearInterval(hsP2)
    }
};

// Eventlistener P1
let finishP1 = false;
let cheaterP1 = true;

addEventListener("keydown", function(e)
 {
    if (e.keyCode === 32 && !cheaterP1) {
    stopFunction(1);
    finishP1 = true;
    postGame();
    } else if (e.keyCode === 32) {
        cheaterPlayer1.innerHTML = "Don't you cheat! "
    }

 });

 // Eventlistener P2
let finishP2 = false;
let cheaterP2 = true;

addEventListener("keydown", function(e)
{
    if (e.keyCode === 13 && !cheaterP2) {
        stopFunction(2);
        finishP2 = true;
        postGame();
    } else if (e.keyCode === 13) {
        cheaterPlayer2.innerHTML = "Don't you cheat! "
    }
});

// Postgame
function postGame() {
    if (finishP1 && finishP2) {
        whoWon();
        popUpUp();
        againButton.style.display = "block";
    }
};

// Pop up Yay
let popUp = document.getElementById("popup");
let winWin = document.getElementById("winner");

function popUpDown() {
    popUp.style.opacity = "0";
    popUp.style.top = "80%";
}

function popUpUp() {
    popUp.style.opacity = "1";
    popUp.style.top = "0";
}

function whoWon() {
    if (hsOne > hsTwo) {
        winWin.innerHTML = "Player 2 is the winner!"
    } if (hsOne < hsTwo) {
        winWin.innerHTML = "Player 1 is the winner!"
    } 
}

// Instructions screen
let instScreen = document.getElementById("instructions");

function letMePlay() {
    instScreen.style.bottom = "100%";
}