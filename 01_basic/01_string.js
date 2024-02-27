// string and its methods

// DECLARING STRING

const user= 'Adarsh '

const anotherName= new String('Akhand Gutka')

// NOW string functions 

console.log(user+ anotherName);                     //concatination

console.log(anotherName.charAt(4));                 // check letter on index 4

console.log(user.indexOf('s'));                     // check indexx of letter s

console.log(anotherName.toUpperCase());             // to convert string to uppercase

console.log(user.toLocaleLowerCase());              // to convert string to lowercase

console.log(anotherName.replace(' ','-'));          // replaces value 1 ' ' with value 2 '-'

console.log(user.slice(1,4));                       // slice up the strig from value 1th index to value 2nd-1th index
