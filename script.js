let randomNumber = (parseInt(Math.random() * 100 + 1));   //generated random number
const userInput = document.querySelector('#guessField');    //tooked input from user
const submit = document.querySelector('#subt');             //tooked submit input
const guessSlot = document.querySelector('.guesses');       //tooked previous guesses input(p tag)
const Remaining = document.querySelector('.lastResult');    //tooked remaining guesses input(p tag)
const lowOrHi = document.querySelector('.lowOrHi');         //tooked loworhi input(p tag)
const startOver = document.querySelector('.resultParas');   

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess); 
    });    
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number.');
    }
    else if(guess < 1){
        alert('Please enter a number greater than 1.');
    }
    else if(guess > 100){
        alert('Please enter a number less than 100.');
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 10){
            displayGuess(guess);
            displayMessage(`Game Over. random number was ${randomNumber}`);
            endGame()
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame()
    } else if(guess < randomNumber){
        displayMessage(`Number is too low`);

    } else if(guess > randomNumber){
        displayMessage(`Number is too high`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    Remaining.innerHTML = `${10 - numGuess}`;
    numGuess++;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        Remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}






