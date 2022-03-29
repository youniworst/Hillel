'use strict';


// 1. Написать функцию getSum, которая принимает массив чисел и возвращает сумму этих чисел (используя рекурсии как вы догадались)
// ** Задача к этой же, если мы передаем многомерный массив getSum([1, [2, [3]]])


function getSum(arr) {
    let taskArr = arr;
    let element = taskArr[taskArr.length - 1];
    if (taskArr.length == 1 ) return element;    
    taskArr.pop();
    return element + getSum(taskArr);
}
console.log(getSum([1, 2, 3, 5, 6, 10]));





// 2. Написать функцию contains которая проверят есть ли в объекте свойство с этим значением (используя рекурсии как вы догадались)

function contains(obj, val) {
    let depth = null;
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            if (val == element) return true;
            if (typeof (element) === 'object' && element !== null) {
                depth = element;
            }
            if (key == Object.keys(obj)[Object.keys(obj).length - 1]) {
                if(depth != null) return contains(depth,val);
                return false
            } 
            
        }
    }
}
const obj = {
    a: {
        b: {
            c: {
                d: 'test',
                e: {
                    f: 5,
                    g: 2,
                    h: {
                        i: 10,
                    },
                    j: null,
                    l: {
                        m: 25
                    }
                },
                o: 'olol'
            }
        },
        k: 1,
    }
}
console.log(contains(obj, 'olol'));




// 3. Создать функцию createStack, которая возвращает метода add, remove и get. Собственно add - добавляет новый элемент в стек, remove - удаляет элемент, get - возвращает это стек

function createStack() {
    let stack = []
    return new function() {
        this.add = function (element) {
            stack.push(element)
        },
        this.remove = function() {
            stack.pop()
        },
        this.get = function() {
            return stack
        }
    }
}

const stack = createStack();
stack.add(5);
stack.add(3);
stack.add(2);
stack.add("test");
stack.remove();
stack.add("test 2");
stack.add("test 3");
stack.remove()
stack.get() 

console.log(stack.get())
