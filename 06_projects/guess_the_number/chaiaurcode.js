// document.addEventListener('click')
const randomNum = parseInt((Math.random())*100+1)
let inputValue = document.querySelector('#guessField').value
const sbmtBtn = document.querySelector('#subt')
const prevGuesses = document.querySelector('.guesses')
const remainingGuss = (document.querySelector('.lastResult')).innerHTML
const lowOrHi = document.querySelector('.lowOrHi')

const previousGuess = []
const playGame = true

if(playGame){
    sbmtBtn.addEventListener('click', function(EvObj){
        EvObj.preventDefault()
        inputValue = parseInt(inputValue)
        guessValidation(inputValue)
    })
}

function guessValidation(guess) {
    if (guess < 0 || guess > 500 || isNaN || guess == '') {
        
    }
}