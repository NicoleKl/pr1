// function initSlider() {
//     let slide1 = document.getElementsByClassName('response1')[0];
//
//     let slider = document.getElementsByClassName('slider')[0];
//
//     let numberOfSlides = document.getElementsByClassName('responses').length;
//
//     slider.style.width = `${slide1.offsetWidth}px`;
//
//     const time = slider.dataset.timeout;
//     if (time === undefined) {
//         time = 5000;
//     }
//
//     const mode = slider.dataset.mode;
//
//
//     let index = 0;
//
//     const node = document.querySelectorAll(".block")[0];
//
//     node.addEventListener('click', function(event) {
//         if(event.target.classList.contains('navigation_right')) {
//             index ++;
//             slide1.style.marginLeft = `-${slide1.offsetWidth * index}px`;
//         }
//     })
// }
//
// initSlider();
function ff() {
    window.addEventListener('resize', reportWindowSize);

    function reportWindowSize() {
        heightOutput.textContent = window.innerHeight;
        widthOutput.textContent = window.innerWidth;
    }

    let currentSlide = 0;

    let rootNode = document.querySelector('.block');
    let innerNode = rootNode.querySelector('.slider');
    let prevNode = rootNode.querySelector('.nav_left');
    let nextNode = rootNode.querySelector('.nav_right');

    let slides = innerNode.querySelectorAll('.responses');
    let firstSlide = slides[0];
    let amountOfSlides = slides.length;

    let sliderWidth = innerNode.offsetWidth;
    firstSlide.style.marginLeft = firstSlide.style.marginLeft || 0;

    let time = innerNode.dataset.timeout;
    let int;

    if (time !== undefined) {
        int = setInterval(() => {
            firstSlide.style.marginLeft = `-${firstSlide.offsetWidth * currentSlide}px`;
            currentSlide++;

            if (currentSlide > amountOfSlides) {
                currentSlide = 0;
                firstSlide.style.marginLeft = `-${firstSlide.offsetWidth * currentSlide}px`;
                currentSlide++;
            }
        }, time);

        let stop = innerNode.dataset.pauseOnHover;
        if(stop === 'true') {
            innerNode.addEventListener('mouseenter', function () {
                clearInterval(int);
            })

            innerNode.addEventListener('mouseleave', function () {
                int = setInterval(() => {
                    firstSlide.style.marginLeft = `-${firstSlide.offsetWidth * currentSlide}px`;
                    currentSlide++;

                    if (currentSlide > amountOfSlides) {
                        currentSlide = 0;
                        firstSlide.style.marginLeft = `-${firstSlide.offsetWidth * currentSlide}px`;
                        currentSlide++;
                    }
                }, time)
            })
        }
    }

    function next() {
        if (currentSlide >= amountOfSlides) {
            currentSlide = 0;
            firstSlide.style.marginLeft = `-${firstSlide.offsetWidth * currentSlide}px`;
            currentSlide++;
        } else {
            firstSlide.style.marginLeft = `-${firstSlide.offsetWidth * currentSlide}px`;
            currentSlide++;
        }
    }

    function prev() {
        if (currentSlide <= 0) {
            currentSlide = 0;
        }
        firstSlide.style.marginLeft = `${parseInt(firstSlide.style.marginLeft) + sliderWidth}px`
        currentSlide--;
    }

    prevNode.addEventListener("click", prev);

    nextNode.addEventListener("click", next);
}

