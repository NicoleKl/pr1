function isPal(string) {
    var newStr = string.toLowerCase().split(" ").join("");

    for (var i = 0; i < (newStr.length/2); i++) {
        if (newStr[i] !== newStr[newStr.length - i - 1]) {
            return false;
        }  return true;
    }
}

console.log(isPal('Я нeсу гусеня'));