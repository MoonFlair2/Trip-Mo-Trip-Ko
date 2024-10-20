// Name: Carl Michael Canlas //
// Section: CYB - 201 //
// Date: November 18, 2023 //

// Scrolling script
document.addEventListener('DOMContentLoaded', function () {
    // Define easing functions
    const easeFunctions = {
        easeInQuad: function (t, b, c, d) {
            t /= d;
            return c * t * t + b;
        },
        easeOutQuad: function (t, b, c, d) {
            t /= d;
            return -c * t * (t - 2) + b;
        }
    };

    // Initialize MoveTo with the specified easing function
    const moveTo = new MoveTo({
        ease: 'easeInQuad'
    }, easeFunctions);

    // Register triggers for scrolling
    const triggers = document.getElementsByClassName('js-trigger');
    for (let i = 0; i < triggers.length; i++) {
        moveTo.registerTrigger(triggers[i]);
    }
});

// Hamburger menu
const burger = document.querySelector('.hamburger');
const header = document.querySelector('.header__menu');
burger.addEventListener('click', () => {
    header.classList.toggle('header__menu--open');
    burger.classList.toggle('active');
});


// Accordion script
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {

        const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
        if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});

// Slider
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const track = document.querySelector('.track');

let carouselWidth = document.querySelector('.carousel-container').offsetWidth;

window.addEventListener('resize', () => {
    carouselWidth = document.querySelector('.carousel-container').offsetWidth;
});

let index = 0;

next.addEventListener('click', () => {
    index++;
    prev.classList.add('show');
    track.style.transform = `translateX(-${index * carouselWidth}px)`;

    if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
        next.classList.add('hide');
    }
});

prev.addEventListener('click', () => {
    index--;
    next.classList.remove('hide');
    if (index === 0) {
        prev.classList.remove('show');
    }
    track.style.transform = `translateX(-${index * carouselWidth}px)`;
});
