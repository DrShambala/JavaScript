// generate a random background

const randCol = function(){
    
    const hexValues = '0123456789ABCDEF'
       randomColor = '#'
    
    for(let i=0;i<6;i++){
        randomColor += hexValues[(Math.floor(Math.random() * 16))]
    }
    // console.log(randomColor);
    return randomColor
}


// assign the funcitons to the buttons
// document.querySelector('#start').addEventListener('click',interval)

document.querySelector('#start').addEventListener('click',function(){
    const interval = setInterval(function(){
        document.querySelector('body').style.backgroundColor = randCol()
    },1000)
    document.querySelector('#stop').addEventListener('click',function(){
        clearInterval(interval)
    })
})

