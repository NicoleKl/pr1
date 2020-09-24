function myMap(arr, func) {
    return function () {
        var newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(func(arr[i]));
        }
        return newArr;
    }
}

function double(item) {
    return item * 2
}

function tripple(item) {
    return item * 3
}

const doubleArr = myMap([1, 2, 3, 4, 5], double);
const trippleArr = myMap([1, 2, 3, 4, 5], tripple);

console.log(doubleArr()); // [2, 4, 6, 8, 10]
console.log(trippleArr()); // [3, 6, 9, 12, 15]