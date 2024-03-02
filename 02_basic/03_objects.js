// declaring object

const dog = {
    name : 'sheru',
    omnivorus : true,
    age : 7,
    legs : 4,
    breed : 'vodafone wala kutta'
}
// console.log(dog);
// console.log(dog.age);
// console.log(dog['breed']);


// dog.breed = 'labrador'
// console.log(dog.breed);
// Object.freeze(dog)              // it will stop the object from any further changes
// dog.breed = 'germen shephered'      // it won't change because object is freeze 
// console.log(dog.breed);

dog.food = 'dog food'
console.log(dog);


dog.greeting = function(){
    console.log(`Hello my dog, ${this.name}`);
}

console.log(dog.greeting());

