'use strict';

const listArr = [{
        title: 'Lorem ipsum dolor',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
    },
    {
        title: 'Lorem ipsum dolor 1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
    },
    {
        title: 'Lorem ipsum dolor 2',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
    },
    {
        title: 'Lorem ipsum dolor 3',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
    },
    {
        title: 'Lorem ipsum dolor 4',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
    },
    {
        title: 'Lorem ipsum dolor 5',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
    }
]

// Часть 1. Создайте ul через createElement, затем вставьте каждый элемент этого массива в отдельную li (то есть создать еще 2 элемента для свойства title и ы свойства text). Поместить все созданные li внутри этой ul, затем вставьте эту ul в конец body.

// Для каждого созданного li добавить класс list-item

function createList(arr) {
    let ul = document.createElement('ul');
    arr.forEach(element => {
        for (const key in element) {
            let li = document.createElement('li');
            ul.append(li);
            li.append(element[key]);
            li.className = 'list-item';
        }
    });
    document.body.append(ul)
}

createList(listArr)

// Часть 2. После это найти все элементы li и перебрать их в цикле.

// Сделать функцию которая будет возвращать рандомный цвет, и для каждого li применить этот рандомный цвет текста. (Это все сделать с помощью js)

function addColor() {
    function randomNum() {
        return Math.floor(Math.random() * 255);
    }
    let elements = document.getElementsByClassName('list-item');
    for (const iterator of elements) {
        iterator.style.color = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
    }
}

addColor()
