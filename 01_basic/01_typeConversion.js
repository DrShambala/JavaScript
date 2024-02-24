//  TYPE CONVERSION

let num= 20
let shabd= 'string'
let bool= true

let num2= String(num)
let num3= Boolean(num)

console.table([num,typeof num, num2,typeof num2, num3, typeof num3])
/*
  20       
 'number' 
 '20'     
 'string' 
 true     
 'boolean' */

let shabd2= Number(shabd)
let shabd3= Boolean(shabd)

console.table([shabd,typeof shabd, shabd2,typeof shabd2, shabd3, typeof shabd3])

/*
 'string'  
 'string'  
 NaN       
 'number'  
 true      
 'boolean' 
 */

let bool2= Number(bool)
let bool3= String(bool)

console.table([bool,typeof bool, bool2,typeof bool2, bool3, typeof bool3])

/*
 true      
 'boolean' 
 1         
 'number'  
 'true'    
 'string'  
*/