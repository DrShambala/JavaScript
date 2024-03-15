const btn = document.querySelectorAll('.button')
const bdy = document.querySelector('body')

btn.forEach(function (buttons) {
    buttons.addEventListener('click',function (Eobjects){
        // console.log(Eobjects);
        console.log(Eobjects.target);
        const clr = Eobjects.target.id
        // if(clr == 'grey'){
            // }
            switch (clr) {
                case 'grey':
                        bdy.style.backgroundColor = clr
                break;
                case 'white':
                        bdy.style.backgroundColor = clr
                break;
                case 'blue':
                        bdy.style.backgroundColor = clr
                break;
                case 'yellow':
                        bdy.style.backgroundColor = clr
                break;
        
            default:
                break;
        }
    })
})