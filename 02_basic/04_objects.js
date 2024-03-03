const myObj = new Object()    // this is a singleton object

const yourObj  = {}         // this is a non singleton object

yourObj.id = 'name1212'
yourObj.name  = "someone's name"
yourObj.isLoggedIn = true

// console.log(yourObj);

const obj1 = {1:'A',2:'B'}
const obj2 = {4:'A',3:'B'}
const obj3 = {5:'A',6:'B'}

// methods of combining 2 or more objects

// const finalObj = {obj1,obj2,obj3}
// const finalObj = Object.assign(obj1,obj2,obj3)
// const finalObj = {...obj1,...obj2,...obj3}
// console.log(finalObj);


// methods to call out a property of object

// console.log(yourObj.name);
// another method
const {isLoggedIn : login} = yourObj
// console.log(isLoggedIn);
console.log(login);
