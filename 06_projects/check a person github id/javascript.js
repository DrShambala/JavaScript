const btn = document.querySelector('#btn')
btn.addEventListener('click',function(){
    
    const url = 'https://api.github.com/users/DrShambala'
    const XHR = new XMLHttpRequest()
    
    XHR.open('GET',url)
    
    XHR.onreadystatechange = function(){
        console.log(XHR.readyState);
        if(this.readyState === 4){
            const myData = JSON.parse(this.responseText)
            console.log( myData);
            const card = document.querySelector('.card')
            const img = myData.avatar_url 
            card.innerHTML = `<img src="${img}">`
            card.innerHTML += `<h2>name : ${myData.name}</h2>`
            card.innerHTML += `<h2>id : ${myData.id}</h2>`
            card.innerHTML += `<h2>Followers : ${myData.followers}</h2>`
            card.innerHTML += `<h2>public_repos : ${myData.public_repos}</h2>`
            card.innerHTML += `<h2>url : <a href="${myData.url}">URL</a></h2>`
        }
    }
    
    XHR.send()

})