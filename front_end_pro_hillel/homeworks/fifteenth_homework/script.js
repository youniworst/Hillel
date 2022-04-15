'use strict';

function createAsyncList(iterations) {
    let arr = [];
    let i = iterations
    return new Promise((resolve, reject) => {
        setTimeout(function fn() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    arr.push({
                        message: `Current iteration ${i}`
                    })
                    resolve(arr)
                }, 1000)
            }).then(data => {
                i--
                if (i != 0) fn();
                if (i == 0) resolve(data.reverse());
            })
        }, 0)
    })
};

createAsyncList(3).then((data) => {
    console.log(data) // [{message: 'Current iteration 1'}, {message: 'Current iteration 2'}, {message: 'Current iteration 3'}]
})