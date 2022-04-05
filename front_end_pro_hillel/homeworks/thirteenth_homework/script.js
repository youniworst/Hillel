use strict';

// Создать объект shape со свойствами width и height, который будет прототипом для функций
// каждая из этих функция, будет вызвана как функция конструктор (будет создавать новый объект)

// этот объект должен иметь accessor square(площадь), который собственно и будет возвращать эту площадь (get) и устанавливать значения width и height (set). set должен принимать только массив значений с длинной 2 (Сделать проверку обязательно! Иначе выкинуть ошибку)

const shape = {
    width: 0,
    height: 0,
    squareDate: 0,
}

function createSquareProperty(obj, squareFormula) {
    return Object.defineProperty(obj, 'square', {
        get: function () {
            return obj.squareDate
        },
        set: function (value) {
            if (value.length != 2) throw new Error('number of square params must be equal to two ')
            let [width, height] = value;
            obj.width = width;
            obj.height = height;
            obj.squareDate = eval(squareFormula)
        }
    })
}


function Square() {
    createSquareProperty(this, 'this.width * this.height')
    this.__proto__ = shape;
}

function Circle() {
    createSquareProperty(this, 'Math.PI * (this.width ** 2) / 4')
    this.__proto__ = shape;
}

function Rectangle() {
    createSquareProperty(this, '0.5 * this.height * this.width')
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
