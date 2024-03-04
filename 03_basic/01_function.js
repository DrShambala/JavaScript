function sayMyName() {
    console.log('A');
    console.log('D');
    console.log('A');
    console.log('R');
    console.log('S');
    console.log('H');
}
// sayMyName()

// function addTwoNum(num1,num2) {
//     console.log(num1+num2);
// }
function addTwoNum(num1,num2) {
    // console.log(num1+num2);
    return num1+num2
}

// addTwoNum()
// addTwoNum(2,3)
const result = addTwoNum(2,3)
// console.log(result);

// we can give default value to func parameters
function userLogin(username = 'SHARMA JI'){
    console.log( `${username} just logged in`);
}
// userLogin()
// userLogin('Dhananjay')

// use of rest operator (...)

function calcCartItems(val1,val2,...num1){
    return val1,val2, num1
}
// console.log(calcCartItems(200,500,1000,20,'some text',null))

// using array and object for func paramaters

const gymEquipments = {
    weight : 'dumbells',
    belt : 'UNI',
    food : 'peanut butter',
    suppliments : 'cretine'
}


function dietFood(gymNeeds){
    console.log(`for weight we have ${gymNeeds.weight} and for food we have ${gymNeeds.food}`);
}
dietFood(gymEquipments)

// now using ARRAY

const chestDay = ['pushUps','bech press',' cable fly']

function chestExercise(chest){
    console.log(`first ${chest[0]} then ${chest[1]} and then ${chest[2]}`);
}

chestExercise(chestDay)