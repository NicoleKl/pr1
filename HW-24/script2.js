const image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

const bigImage = {};

function multiplyNumeric(image) {
    for (let key in image) {
        if (typeof image[key] === 'number') {
            bigImage[key] = image[key] * 2;
        } else {
            bigImage[key] = image[key];
        }
    }
}

multiplyNumeric(image);

console.log(bigImage);