function add_suffix(a) {
    return function (b) {
        var arr = [...arguments];
        var result = arr.join('') + a;
        return result;
    }
}

const addLy = add_suffix("ly");

console.log(addLy("hopeless"));

const addLess = add_suffix("less");

console.log(addLess("fear"));