const obj = {};

const addProp = addPropf(obj);

function addPropf(obj) {
    return function (key, value) {
        if (key !== undefined && value !== undefined) {
            return obj[key] = value;
        }
    }
}

addProp('name', 'Nick');
addProp();
addProp('age', 25);

console.log(obj);