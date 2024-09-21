const marqueeContainer = document.querySelector('.marquee-container');
const marqueeContent = document.querySelector('.marquee-content');

marqueeContent.innerHTML += marqueeContent.innerHTML;

let scrollAmount = 0;
let speed = 1;

function marqueeAnimation() {
    scrollAmount -= speed;
    if (Math.abs(scrollAmount) >= marqueeContent.scrollWidth / 2) {
        scrollAmount = 0;
    }
    marqueeContent.style.transform = `translateX(${scrollAmount}px)`;
    requestAnimationFrame(marqueeAnimation);
}

marqueeAnimation();

const colors = ['#FFBE21', '#4756DF', '#3EC1F3', '#FF7235', '#BB7259', '#34C759', '#FF2D55', '#AF52DE'];

const originalCard = document.querySelector('.carousel-card');
const container = document.querySelector('.marquee-content');

function createCards(count) {
    for (let i = 0; i < count; i++) {
        const newCard = originalCard.cloneNode(true);
        const color = colors[i % colors.length];
        container.appendChild(newCard);
    }
    marqueeContent.innerHTML += marqueeContent.innerHTML;
}

createCards(10);