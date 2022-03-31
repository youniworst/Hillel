'use strict';

// 1. Создать функцию makeString(str), которая будет работать следующим образом

function makeString(str) {

    let result = str;
    function f(str) {
        result = result + ' ' + str;
        return f;
    }

    f.toString = function () {
        return result;
    };
    return f;
};

let test = makeString('Hello')('world'); // --> 'Hello world'
let anotherTest = makeString('Test')('super')('test') // --> 'Test super test'
alert(test);
alert(anotherTest)



// 2. Дан объект

const person = {
    name: "Alex",
    dob: 2005,
    makeRequest() {
        alert("Request sended");
    }
}


// // Нужно написать декоратор guard для функции makeRequest, который будет вычислять проверять имеет ли пользователь доступ. Условие для доступа, возраст должен быть >= 18 (основываясь на пол dob), ну и дополнительно логировать всю информацию о пользователе при каждой попытке вызвать эту функцию

function logObjInfo(obj) {
    let infoArr = [];
    console.log(obj)
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            if(typeof element == 'function') continue;
            infoArr.push(`${key}: ${element}`)
        }
    }
    console.log(infoArr)
}

function getCurrentYear() {
    let date = new Date();
    return date.getFullYear()    
}

function guard(func) {
    return function() {
        logObjInfo(this);
        if(getCurrentYear() - this.dob >= 18) return func(this)
        return alert('Request declined')
    }
}
person.makeRequest = guard(person.makeRequest)

person.makeRequest()