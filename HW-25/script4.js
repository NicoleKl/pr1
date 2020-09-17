var arr = ['осел', 'банка', 'лісок', 'село', 'кабан', 'сокіл'];

function anClean(array) {
    var alphabetArray = [];
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        var splitWord = array[i].split('').sort( );
        var alphabetWord = splitWord.join("");

        if (!(alphabetArray.includes(alphabetWord))) {
            alphabetArray.push(alphabetWord);
            newArray.push(array[i])
        }
    }
    return newArray;
}

console.log( anClean(arr) );