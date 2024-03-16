const form = document.querySelector('form')

form.addEventListener('submit',function (eObj){
    eObj.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if (height == ''|| height < 0|| isNaN(height)) {
        result.innerHTML = 'Please enter a valid height'
    }
    else if(weight == ''|| weight < 0|| isNaN(weight)){
        result.innerHTML = 'Please enter a valid weight'
    }
    else{
        result.textContent = (height*height)/10000
    }
})
