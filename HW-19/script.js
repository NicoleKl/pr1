let  userNumber = prompt("Enter your number!");

function square(number) {
    return number * number;
}

const squareNumber = square(userNumber);

alert (userNumber + ' raised to the second power will be ' + squareNumber);