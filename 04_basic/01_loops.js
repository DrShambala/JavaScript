const arr = [-3,-2,-1,0,1, 2, 3, 4, 5]

for (const iterator of arr) {
    console.log(iterator);
}

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     if (greet == ' '){
//         // break
//         continue
//     }
//     console.log(`Each char is ${greet}`)
// }


// // MAP
// const myMap = new Map()
// myMap.set('dualist','rage')
// myMap.set('healer','sage')
// myMap.set('tracker','sova')
// myMap.set('dualist','rage')

// console.log(myMap);


// for (const agent of myMap) {
//     console.log(agent);
// }

for (const [type, agent] of myMap) {
    // console.log(`${agent} is a ${type} type agent`);
    
}


// =========================== for of doesn't work properly for objects ======================
// ++++++++++++++++++++++++++++loops for objects ++++++++++++++++++++++++++++++

const myObj = {
    py : 'python',
    rb : 'ruby',
    js: 'javascript',
    css: 'C S S'
}

// for (const members of myObj) {
//     console.log(members);
// }

// this doesn't work

for (const ext in myObj) {
    // console.log(members);
    const language = myObj[ext]
    console.log(`${ext} is use for ${language}`);
}