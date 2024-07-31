const rainContainer = document.querySelector('.rain-container');

function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.style.left = `${Math.random() * 100}vw`;
    raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`;
    raindrop.style.opacity = Math.random();
    rainContainer.appendChild(raindrop);

    setTimeout(() => {
        raindrop.remove();
    }, 3000);
}

setInterval(createRaindrop, 100);
