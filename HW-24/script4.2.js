const obj = {
    className: 'open menu open open'
};

function removeCLass(obj, cls) {
    var splitStr = obj.className.split(' ');

    var newArray = [];

    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i] !== cls) {
            newArray.push(splitStr[i]);
        }
    }
    obj.className = newArray.join(" ");
    return obj;
}


console.log(removeCLass(obj, 'open'));