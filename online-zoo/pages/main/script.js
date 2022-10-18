// Burger menu

const menuButton = document.querySelector('.burger-menu-button');
const burgerMenu = document.querySelector('.burger-menu');
const dark = document.querySelector('.dark');
const burgerNavLinks = document.querySelectorAll('.burger-nav-link');
const burgerCredits = document.querySelector('.burger-credits');
const closeButton = document.querySelector('.burger-close-button');

const openBurgerMenu = () => {
    burgerMenu.style.transform = 'translateX(0)';
    dark.style.display = 'block';
}

const closeBurgerMenu = () => {
    burgerMenu.style.transform = 'translateX(100%)';
    dark.style.display = 'none';
}

menuButton.addEventListener('click', openBurgerMenu);
closeButton.addEventListener('click', closeBurgerMenu);
burgerCredits.addEventListener('click', closeBurgerMenu);
for (let i = 0; i < burgerNavLinks.length; i++) {
    burgerNavLinks[i].addEventListener('click', closeBurgerMenu);
}

document.addEventListener('click', (event) => {
    const click = event.composedPath().includes(burgerMenu) || event.composedPath().includes(menuButton);
    if ( !click ) closeBurgerMenu();
});

// Testimonials slider

const testimonials = document.querySelector('.testimonials-cards-wrapper');
const testimonialsSlider = document.querySelector('.input-range');


testimonialsSlider.addEventListener('input', () => {
    if (window.innerWidth > 1001) {
        testimonials.style.transform = `translateX(-${testimonialsSlider.value*300}px)`;
    } else if (window.innerWidth <= 1001) {
        testimonials.style.transform = `translateX(-${testimonialsSlider.value*323}px)`;
    }
});

window.addEventListener('resize', () => {
    testimonials.style.transform = 'translateX(0)';
    testimonialsSlider.value = 0;
});

// Testimonials popup

const testimonialCards = document.querySelectorAll('.testimonial-card');
const darkBG = document.querySelector('.dark-2');
const popupCards =  document.querySelectorAll('.popup-card-wrapper');
const popupsWrapper = document.querySelector('.testimonials-popups');
const closePopupButton = document.querySelectorAll('.close-popup-button');
  
for (let i = 0; i < testimonialCards.length; i++) {
    testimonialCards[i].addEventListener('click', () => {
        if (window.innerWidth < 981) {
            darkBG.style.display = 'block';
            if (i === 0) popupCards[0].style.top = '100px';
            if (i === 4) popupCards[1].style.top = '100px';
            if (i === 5) popupCards[2].style.top = '100px';
        }  
    })  
}

function closePopups () {
    darkBG.style.display = 'none';
    popupCards[0].style.top = '-500px';
    popupCards[1].style.top = '-500px';
    popupCards[2].style.top = '-500px';
}

document.addEventListener('click', (event) => {
    const click = event.composedPath().includes(popupsWrapper) || event.composedPath().includes(testimonialCards[0]) || event.composedPath().includes(testimonialCards[4]) || event.composedPath().includes(testimonialCards[5]);
    if ( !click ) {
        closePopups();
    }
});

for (let i = 0; i < closePopupButton.length; i++) {
    closePopupButton[i].addEventListener('click', closePopups);
}

// Main slider

const slider = document.querySelector('.slider');
const buttonLeft = document.querySelector('.button-left');
const buttonRight = document.querySelector('.button-right');

const itemLeft = document.querySelector('.item-left');
const itemCenter = document.querySelector('.item-active');
const itemRight = document.querySelector('.item-right');

const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const card4 = document.querySelector('.card4');
const card5 = document.querySelector('.card5');
const card6 = document.querySelector('.card6');
const card7 = document.querySelector('.card7');
const card8 = document.querySelector('.card8');
const card9 = document.querySelector('.card9');
const card10 = document.querySelector('.card10');
const card11 = document.querySelector('.card11');
const card12 = document.querySelector('.card12');
const card13 = document.querySelector('.card13');

const moveLeft = () => {
    if (window.innerWidth > 980) slider.classList.add('transition-left');
    if (window.innerWidth < 980) slider.classList.add('transition-left-tablet');   
    buttonLeft.setAttribute('disabled', true);
    buttonRight.setAttribute('disabled', true);
};

const moveRight = () => {
    if (window.innerWidth > 980) slider.classList.add('transition-right');
    if (window.innerWidth < 980) slider.classList.add('transition-right-tablet');  
    buttonLeft.setAttribute('disabled', true);
    buttonRight.setAttribute('disabled', true);
};

let cardsArray = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13];

const generateLeft = () => {
    let randomCards = [];
    while (randomCards.length < 6) {
        let num = Math.floor(Math.random() * 13);
        randomCards.push(cardsArray[num]);
        randomCards = [...new Set(randomCards)];
    }
    itemLeft.innerHTML = '';
    itemLeft.appendChild(randomCards[0]);
    itemLeft.appendChild(randomCards[1]);
    itemLeft.appendChild(randomCards[2]);
    itemLeft.appendChild(randomCards[3]);
    itemLeft.appendChild(randomCards[4]);
    itemLeft.appendChild(randomCards[5]);
}

const generateRight = () => {
    let randomCards = [];
    while (randomCards.length < 6) {
        let num = Math.floor(Math.random() * 13);
        randomCards.push(cardsArray[num]);
        randomCards = [...new Set(randomCards)];
    }
    itemRight.innerHTML = '';
    itemRight.appendChild(randomCards[0]);
    itemRight.appendChild(randomCards[1]);
    itemRight.appendChild(randomCards[2]);
    itemRight.appendChild(randomCards[3]);
    itemRight.appendChild(randomCards[4]);
    itemRight.appendChild(randomCards[5]);
}

generateRight();
itemCenter.innerHTML = itemRight.innerHTML;

buttonLeft.addEventListener('click', () => {
    generateLeft();
    moveLeft();
});

buttonRight.addEventListener('click', () => {
    generateRight();
    moveRight();
});

slider.addEventListener('animationend', (event) => {
    if (event.animationName === 'move-left' || event.animationName === 'move-left-tablet') {
        slider.classList.remove('transition-left');
        slider.classList.remove('transition-left-tablet');
        itemRight.innerHTML = itemLeft.innerHTML;
        itemCenter.innerHTML = itemLeft.innerHTML;

    } else if (event.animationName === 'move-right' || event.animationName === 'move-right-tablet') {
        slider.classList.remove('transition-right');
        slider.classList.remove('transition-right-tablet');
        itemLeft.innerHTML = itemRight.innerHTML;
        itemCenter.innerHTML = itemRight.innerHTML;  
    }
    buttonLeft.removeAttribute('disabled');
    buttonRight.removeAttribute('disabled');
});