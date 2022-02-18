"use strict";

let askUserAge = prompt("Ваш год рождения?");

if (askUserAge === null) {                                                  //проверка на отмену формы
    alert("Вы отменили форму");
} else if (Boolean(+askUserAge) === false) {                                //проверка на ввод пустого поля или ввод строковых значений
    alert("Ошибка....Перезагрузите и попробуйте еще раз");
} else {
    let userName = prompt("Ваше имя?");

    let userAge = 2022 - askUserAge;

    let userAgeEnding;

    if (userAge % 10 === 1 && userAge % 100 !== 11) {                             //блок на проверку окончаний 'год','года','лет'                                         
        userAgeEnding = "год";
    } else if
        (userAge % 100 === 11
        || userAge % 100 === 12
        || userAge % 100 === 13) {
        userAgeEnding = "лет"
    }
    else if
        (userAge % 10 === 2
        || userAge % 10 === 3
        || userAge % 10 === 4) {
        userAgeEnding = "года";
    } else {
        userAgeEnding = "лет";
    };

    if (userName === null) {                                                 //проверка на отмену формы
        alert("Вы отменили форму");
    } else if (Boolean(userName) === false || isNaN(userName) === false) {  //проверка на ввод пустого поля или ввод числовых значений
        alert("Ошибка....Перезагрузите и попробуйте еще раз");
    } else {
        let checkAge = confirm(`Вам ${userAge} ${userAgeEnding}?`);

        if (checkAge) {
            alert(`Отлично, ${userName}, вам ${userAge} ${userAgeEnding}`);
        } else {
            userAge -= 1;

            if (userAge % 10 === 1 && userAge !== 11) {                     //дополнительный блок на проверку окончаний 'год','года','лет'                                       
                userAgeEnding = "год";
            } else if
                (userAge === 11
                || userAge === 12
                || userAge === 13) {
                userAgeEnding = "лет"
            }
            else if
                (userAge % 10 === 2
                || userAge % 10 === 3
                || userAge % 10 === 4) {
                userAgeEnding = "года";
            } else {
                userAgeEnding = "лет";
            };

            alert(`Тогда, вам ${userAge} ${userAgeEnding}, ${userName}`);
        };
    }
};
