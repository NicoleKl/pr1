var number = prompt("Enter your number");

var power = prompt("Enter power for your number");

var numberInPower = 1;

for (i = 1; i <= power; i++) {
    numberInPower = numberInPower * number;
}

console.log(numberInPower);


/*WHILE*/
// var number = prompt("Enter your number");
//
// var power = prompt("Enter power for your number");
//
// var numberInPower = 1;
//
// var i = 1;
//
// while (i <= power) {
//     i++;
//     numberInPower = numberInPower * number;
// }
//
// console.log(numberInPower);


/*do...while*/
// var number = prompt("Enter your number");
//
// var power = prompt("Enter power for your number");
//
// var numberInPower = 1;
//
// var i = 1;
//
// do {
//     i += 1;
//     numberInPower = numberInPower * number;
// } while (i <= power)
//
// console.log(numberInPower);