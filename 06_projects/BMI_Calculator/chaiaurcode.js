const form = document.querySelector('form')

form.addEventListener('submit',function (eObj){
    eObj.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    const stmt = document.querySelector('#stmt')
    

    if (height == ''|| height < 0|| isNaN(height)) {
        result.innerHTML = 'Please enter a valid height'
    }
    else if(weight == ''|| weight < 0|| isNaN(weight)){
        result.innerHTML = 'Please enter a valid weight'
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        result.textContent = bmi

        if (bmi < 18.6) {
            stmt.textContent = 'Underweight'
        } else if(bmi > 18.6 && bmi < 24.9) {
            stmt.textContent = 'Normal'
        } else{
            stmt.textContent = 'Overweight'
        }
    }
})
