const obj = {
    className: 'open menu menu'
};

function removeCLass(obj, cls) {
    var splitStr = obj.className.split(' ');

    var ind = splitStr.indexOf(cls);

    var newArray = [];

    for (let i = 0; i < splitStr.length; i++) {
        if (i !== ind) {
            newArray.push(splitStr[i]);
        }
    }
    obj.className = newArray.join(" ");
    return obj;
}


console.log(removeCLass(obj, 'open'));