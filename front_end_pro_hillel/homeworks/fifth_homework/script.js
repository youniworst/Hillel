'use strict';

function Calculator() {
    this.data = {
        sum: 0,
        substract: 0,
        pow: 0,
        multiply: 0,
        divide: 0,
        lastOperation: null,
    }

    this.updateData = function (methodName, result) {
        ++this.data[methodName];
        this.data.lastOperation = {
            method: methodName,
            result: result,
        }
    }
    this.sum = function (a, b) {
        let result = a + b;
        this.updateData('sum', result);
        return result
    }

    this.subtract = function (a, b) {
        let result = a - b;
        this.updateData('substract', result);
        return result
    }

    this.pow = function (a, b) {
        let result = a ** b;
        this.updateData('pow', result);
        return result
    }

    this.multiply = function (a, b) {
        let result = a * b;
        this.updateData('multiply', result);
        return result
    }

    this.divide = function (a, b) {
        let result = a / b;
        this.updateData('divide', result);
        return result
    }

    this.getMethodCallCount = function (methodName) {
        return this.data[methodName]
    }
    this.getLastOperation = function () {
        return this.data.lastOperation
    }
}
const calculator = new Calculator();

console.log('sum 10 5', calculator.sum(10, 5)); // 15 
console.log('sum 20 5', calculator.sum(20, 5)); // 25 
console.log('subsctract 10 5', calculator.subtract(10, 5)); // 5
console.log('pow 2 3', calculator.pow(2, 3)); // 8
console.log('pow 3 3', calculator.pow(3, 3)); // 27
console.log('pow 4 3', calculator.pow(4, 3)); // 64

console.log(calculator.getLastOperation())

console.log('multiply 2 3', calculator.multiply(2, 3)); // 6
console.log('divide 6 2', calculator.divide(6, 2)); // 3
console.log('divide 4 2', calculator.divide(4, 2)); // 
console.log('divide 3 2', calculator.divide(3, 2)); // 1.5
console.log('divide 2 2', calculator.divide(2, 2)); // 1



console.log('pow count', calculator.getMethodCallCount("pow")); // 3
console.log('sum count', calculator.getMethodCallCount("sum")); // 2
console.log('divide count', calculator.getMethodCallCount("divide")); // 4
console.log('substract count', calculator.getMethodCallCount("substract")); // 1

console.log(calculator.getLastOperation())