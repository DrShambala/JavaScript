// const func = function one(){
//     console.log('hello world');
// }

// console.log(func);

function one(){
    const username = 'adarsh'

    function two() {
        const code = 'for practice'
        console.log(username);
    }
    // console.log(code);   // this will show error bqz code is under block scope
    two()
}

one()

const func = function(num){
    return num + 1
}
// func(3)
// console.log(func);
console.log(func(3));