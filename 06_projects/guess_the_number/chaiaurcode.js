// document.addEventListener('click')
const randomNum = parseInt((Math.random())*10+1)
const inputValue = document.querySelector('#guessField')
const sbmtBtn = document.querySelector('#subt')
const prevGuesses = document.querySelector('.guesses')
const remainingGuss = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

const previousGuess = []
const playGame = true

if(playGame){
    sbmtBtn.addEventListener('click', function(EvObj){
        EvObj.preventDefault()
        const guess = parseInt(inputValue.value)
        guessValidation(guess)
        // console.log(typeof inputValueInt,inputValueInt);
    })
}

function guessValidation(guess) {
        if (isNaN(guess)) {
            displayMessage('enter a valid number')
            // alert('guess')
        }
        else if(guess < 0 || guess > 11){
            displayMessage('enter number between 0 to 10')
            // alert('guess')
        }
        else{
            checkNumber(guess)
        }

}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
  }

function checkNumber(num){
    if (num != randomNum) {
        const remainingGusses = remainingGuss.innerHTML -1
        remainingGuss.innerHTML = remainingGusses
        console.log(`${remainingGusses} and random num is ${randomNum}`);
        previousGuess.push(num)    
        prevGuesses.innerHTML = previousGuess   
        if(num < randomNum){
            displayMessage('your number is Too low ')
        }else{
            displayMessage('your number is too high')
        }
        inputValue.value = ''
    } else {
        console.log('correct!');
        displayMessage('CORRECT! ')
    }
}