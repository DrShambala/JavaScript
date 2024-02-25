// types of data type of JS
// PRIMITIVE DATATYPE
// String, Number, null, undefined, boolean, bigInt, symbol

console.log('PRIMITIVE DATATYPE');
let userName= 'name@123'
console.log(typeof userName);

let age = 18
console.log(typeof age);

let temperature= null
console.log(typeof temperature);

let unknownVar;
console.log(typeof unknownVar);

let isLoggedIn= true
console.log(typeof isLoggedIn);

let bigNum= 4752934875934875934785983745n
console.log(typeof bigNum);

console.log('NON PRIMITIVE DATATYPE');
//  NON PRIMITIVE DATATYPE
// array, Object, function

let months= ['january','february','march','aprail']
console.log(typeof months);

let myObj= {
    user: 'name',
    age: 29,
    LoggedIn: false
}
console.log(typeof myObj);

function myFunc() {
    console.log('HELLO JAVASCRIPT');
}
console.log(typeof myFunc);


// According to ECMA standards datatype of array, object and null is shown as OBJECT 