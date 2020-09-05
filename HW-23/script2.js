function cutText(text) {
    if (text.length > 20) {
        return text.slice(0, 21)+'...'
    }
    return text;
}

console.log(cutText('Напишите функцию, которая принимает на вход строку и возвращает ее неизменной если ее длина не превышает 20 символов.'));
console.log(cutText('Напишите функцию'));