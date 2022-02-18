'use strict';

function getRandomString(length) {
    var randomChars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
        result += randomChars.charAt(
            Math.floor(Math.random() * randomChars.length),
        );
    }
    return result;
}




function generateObject(str) {
    let resultObj = {};
    for (let i = 1; i <= str.length; i++) {
        resultObj[getRandomString(10)] = {
            value: str.slice(0, i),
        }
    }
    return resultObj;
}

let test = generateObject('testing');
console.log(test);

/* console.log(Object.keys(test)[Object.keys(test).length - 1])    //последний ключ в объекте

function getStringFromObject(obj) {
    let lastKey = Object.keys(test)[Object.keys(test).length - 1];
    return obj[lastKey].value;
}

let test2 = getStringFromObject(test);
console.log(test2);
 */
