const randomNumber = parseInt(Math.random()*100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const resultParas = document.querySelector('.resultParas');



const prevGuess = [];
const numGuess = 1;

let playGame = true ;

if(playGame){

    submit.addEventListener('click', function(e){

        e.preventDefault()

        const guess = parseInt(userInput.value);
        console.log(guess);
        
        validateGuess(guess)
    })
}



function validateGuess(guess){

}


function checkGuess(guess){

}

function displayGuess(guess){

}

function DisplayMassage(message){

}


function newGame(){

}

function endGame(){

}
