const myDate= new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// const tareekh= new Date(2020,0,32)
const tareekh= new Date(2020,0,32,5,4)
console.log(tareekh.toLocaleString());

console.log((myDate.getMonth()).toLocaleString());

const abc= myDate.toLocaleString('default',{
    weekday: 'long'
})

console.log(abc);