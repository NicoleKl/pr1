/* TASK1 with => */

let number = 1;

var pow = ((x, n) => {
    for ( i = 1; i<=n; i++) {
        number = number * x;
    }
    return number;
});

console.log(pow(5, 2))

/* TASK2 with => */

var makeNegative = ((num) => {
    if (num > 0) {
        return num * (-1);
    } else {
        return num;
    }
})

console.log(makeNegative(-5))