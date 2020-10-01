Array.prototype.filter = undefined;

const arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
];

let invalidEntries = 0;

function isNumber(obj) {
    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

function filterByID(item) {
    if (isNumber(item.id) && item.id !== 0) {
        return true;
    }
    invalidEntries++;
    return false;
}

let arrByID;

try {
    arrByID = arr.filter(filterByID);
} catch (error) {
    console.log('Default filter is broken, lets try to use polyfill');

    try {
        enableFilterPolyfill();
        arrByID = arr.filter(filterByID);
    } catch (error) {
        console.log('Polyfill is also broken, LET`S FIX IT!');
    }
}

function enableFilterPolyfill() {
    if (!Array.prototype.filter){
        Array.prototype.filter = function(func, thisArg) {
            'use strict';
            if ( ! ((typeof func === 'Function' || typeof func === 'function') && this) )
                throw new TypeError();

            var len = this.length >>> 0,
                res = new Array(len),
                t = this, c = 0, i = -1;

            var kValue;
            if (thisArg === undefined){
                while (++i !== len) {
                    if (i in this){
                        kValue = t[i];
                        if (func(t[i], i, t)){
                            res[c++] = kValue;
                        }
                    }
                }
            }
            else{
                while (++i !== len) {
                    if (i in this){
                        kValue = t[i];
                        if (func.call(thisArg, t[i], i, t)){
                            res[c++] = kValue;
                        }
                    }
                }
            }

            res.length = c;
            return res;
        };
    }
}

console.log(arrByID);