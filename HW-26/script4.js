const addf = add();


function add() {
    return function one(x) {
        return function two(y) {
            if (typeof y === 'number') {
                x = x + y;
                return two;
            } else {
                return x;
            }
        };
    }
}

console.log(addf(1)(2)());
console.log(addf(1)(2)(3)(4)(5)());
console.log(addf(1)(2)('some text'));