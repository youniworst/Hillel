'use strict';

// Создать объект shape со свойствами width и height, который будет прототипом для функций
// каждая из этих функция, будет вызвана как функция конструктор (будет создавать новый объект)

// этот объект должен иметь accessor square(площадь), который собственно и будет возвращать эту площадь (get) и устанавливать значения width и height (set). set должен принимать только массив значений с длинной 2 (Сделать проверку обязательно! Иначе выкинуть ошибку)

const shape = {
    width: 0,
    height: 0,
    squareDate: 0,
    get square() {
        return this.squareDate
    },
    set square(value) {
        if (value.length != 2) throw new Error('number of square params must be equal to two ')
        let [width, height] = value;
        this.width = width;
        this.height = height;
        if (this.figure == 'square') {
            this.squareDate = this.width * this.height
        }
        if (this.figure == 'circle') {
            this.squareDate = Math.PI * (this.width ** 2) / 4
        }
        if (this.figure == 'rectangle') {
            this.squareDate = 0.5 * this.height * this.width
        }
    }
}



function Square() {
    this.figure = 'square';
    this.__proto__ = shape
}

function Circle() {
    this.figure = 'circle';
    this.__proto__ = shape;
}

function Rectangle() {
    this.figure = 'rectangle'
    this.__proto__ = shape;
}



let square = new Square();
let circle = new Circle();
let rectangle = new Rectangle();

square.square = [10, 20]
circle.square = [10, 20]
rectangle.square = [10, 20]



console.log(square.square)
console.log(circle.square)
console.log(rectangle.square)



rectangle.square = [1, 2, 4] // тест на ошибку при неверном кол-ве параметров