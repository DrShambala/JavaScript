const class6 = ['abhay','aman','divyansh']

const class9 = ['harsh','pateli','dewansh']

// class6.push(class9)
// console.log(class6);


// const schoolFrnds= class6.concat(class9)
// console.log(schoolFrnds);


// const frnds= [...class6,...class9]
// console.log(frnds);

const anArr = [1,2,3,4,[5,6,7],8,9,0,[23,45,67,[54,78,99]],23]
const anotherArr= anArr.flat(Infinity)
console.log(anotherArr);