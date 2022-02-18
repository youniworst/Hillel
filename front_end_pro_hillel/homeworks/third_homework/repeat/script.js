function repeat(str = '', n = 2) {
    let result = str;
    for (let i = 1; i < n; i++) {
        result += str;
    };
    return result;
};

let test1 = repeat('Test');
let test2 = repeat('Olol', 5);

alert(test1);
alert(test2);