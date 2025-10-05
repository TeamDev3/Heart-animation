const container = document.querySelector('.container');

// Create floating hearts at random horizontal positions
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');

    // Random horizontal offset between -50 and +50 px
    const xMove = (Math.random() * 100) - 50;
    heart.style.setProperty('--x-move', xMove.toFixed(2));

    // Random horizontal start position within container width (30% to 70%)
    const startX = 50 + (Math.random() * 40 - 20);
    heart.style.left = `${startX}%`;

    container.appendChild(heart);

    // Remove heart after animation completes (4s)
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Create floating hearts repeatedly every 400ms
setInterval(createFloatingHeart, 400);
