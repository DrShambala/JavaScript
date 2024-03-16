const clock = document.getElementById('clock')

setInterval(function(){
    
    let mydate = new Date()
    // clock.textContent = mydate.toLocaleTimeString()
    let hr = mydate.getHours()
    let min = mydate.getMinutes()
    
    if(hr >= 12){
        hr = hr-12
        clock.textContent = `${hr } : ${min}`
    }
    else{
        clock.textContent = `${hr } : ${min}`
    }

},1000)