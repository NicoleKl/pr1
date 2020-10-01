try {
    setTimeout(unexistingFunction(), 3000)
} catch (error) {
    console.log('Something went wring');
}

setTimeout(() => {
    console.log('Hello!');
}, 4000)