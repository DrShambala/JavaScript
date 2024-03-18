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
        const inputValueInt = parseInt(inputValue.value)
        guessValidation(inputValueInt)
        // console.log(typeof inputValueInt,inputValueInt);
    })
}

function guessValidation(guess) {
    // console.log(typeof guess);
    if (guess <= 0 || guess >= 10 ) {
        lowOrHi.textContent = 'enter number between 0 to 10'
    }else if(guess == NaN || guess === ''){
        lowOrHi.textContent = 'enter a valid number'
        // console.log('enter a valid number');
    } 
    else{
        console.log('sdfghjk');
        // checkNumber(guess)
    }    
}

function checkNumber(num){
    if (num != randomNum) {
        const remainingGusses = remainingGuss.innerHTML -1
        console.log(`${remainingGusses} and random num is ${randomNum}`);
        remainingGuss.innerHTML = remainingGusses
    } else {
        console.log('correct!');
    }
}