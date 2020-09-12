var numbers = [];

while(true) {
    var input = parseInt(prompt("Enter number to calculate:"));
    if (isNaN(input)) {
        var result = 0;
        for (var i = 0; i < numbers.length; i++) {
            result += numbers[i];
        }
        alert(result);
        break;
    } else {
        numbers.push(input);
    }
}