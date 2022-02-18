'use strict';
/* 
const summary = (a, b, c) => {
    return a + b + c;
};

const person = {
    firstName: 'Alex',
    lastName: 'Lion',
    age: 30,
    hairColor: 'brown',
    isAdmin: true,
};

console.log(person.firstName, person.age);

person.weight = 100;

person.age = 26;

delete person.isAdmin

person['=1041295jssf=1f'] = {};

console.log(person); */


/* const generatePerson = (firstName, lastName, age, isAdmin) => ({
    firstName,
    lastName,
    age,
    isAdmin
});

const person = generatePerson('Alex', 'Lion', 30, true);

console.log(person) */


/* const animal = {};

function updateAnimal(obj
    ) {
    const key = prompt('Enter key please');
    const value = prompt('Enter value please');
    obj[key] = value;
};

updateAnimal(animal);
console.log(animal); */



/* const user = {
    firstName: 'John',
    lastName: 'Wick',
    age: 30,
}

const otherUser = Object.assign({}, user)
console.log(otherUser)
 */
/*
for (let key in user) {
    console.log(key,user[key])
} */




/* const user = {
    firstName: 'John',
    lastName: 'Wick',
    age: 30,
    otherInfo: {
        city: 'Odessa',
        street: 'Bunina',
    }
}


function cloneDeep(obj) {
    let resultObj = {};
    for (let key in obj) {
        let value = obj[key];
        if (typeof value === "object" && value !== null) {
            resultObj[key] = cloneDeep(value);
        } else {
            resultObj[key] = value;
        }
    }
    return resultObj;
}

const otherUser = cloneDeep(user);
console.log(otherUser); */