function initSlider() {
    let slide1 = document.getElementsByClassName('response1')[0];

    let slider = document.getElementsByClassName('slider')[0];

    let numberOfSlides = document.getElementsByClassName('responses').length;

    slider.style.width = `${slide1.offsetWidth}px`;

    const time = slider.dataset.timeout;
    if (time === undefined) {
        time = 5000;
    }

    const mode = slider.dataset.mode;


    let index = 0;

    if (mode === "loop") {
        const int = setInterval(() => {
            slide1.style.marginLeft = `-${slide1.offsetWidth * index}px`;

            index++;

            if (index >= numberOfSlides) {
                index = 0;
            }
        }, time)
    } else {
        const int = setInterval(() => {
            slide1.style.marginLeft = `-${slide1.offsetWidth * index}px`;

            index++;
            if (index >= numberOfSlides) {
                clearInterval(int)
            }
        }, time)
    }
}

initSlider();

