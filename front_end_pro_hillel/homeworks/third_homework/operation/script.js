function operation(a,b,sumCallback) {
    a **= 2;
    b **= 2;
   return sumCallback(a,b);
};

function summary (x,y) {
    return x + y;
};

let test1 = operation(2,3,summary);
let test2 = operation(4,5,summary);

alert(test1);
alert(test2);