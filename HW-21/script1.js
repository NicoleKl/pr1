let number = 1;

function pow(x, n) {
    for ( i = 1; i<=n; i++) {
        number = number * x;
    }
    return number;
}

console.log(pow(5, 2))
