let word1 = 'spam';
let word2 = 'sex';

function checkSpam(str) {

    if (str.toLowerCase().includes(word1) || str.toLowerCase().includes(word2)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkSpam('get new Sex videos')); // true
console.log(checkSpam('[SPAM] How to earn fast money?')); // true
console.log(checkSpam('New PSD template')); // false