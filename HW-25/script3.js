var strings = ['open', 'open', 'menu', 'menu', 'menu', 'menu', 'open', 'open', '8-()' ];

function unique(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}

console.log( unique(strings) );