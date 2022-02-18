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

let ul = document.createElement('ul')