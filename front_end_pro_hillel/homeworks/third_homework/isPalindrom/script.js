function isPalindrom(str) {
    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    };
    if (str.toLowerCase() == reverseStr.toLowerCase()) return true;
    return false;
};

let test1 = isPalindrom('LevEl');
let test2 = isPalindrom('Olol');

alert(test1);
alert(test2);