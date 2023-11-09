let cardsVisible = false;

document.getElementById('display-cards-button').addEventListener('click', function() {
    if (!cardsVisible) {
        shuffleCards();
        displayCards();
        cardsVisible = true;
    }
});

document.getElementById('hide-cards-button').addEventListener('click', function() {
    hideCards();
    cardsVisible = false;
});

function shuffleCards() {
    const cards = document.querySelectorAll('.card-option');
    cards.forEach((card, index) => {
        card.style.left = `${index * 20}px`;
    });
}

function displayCards() {
    const cards = document.querySelectorAll('.card-option');
    const padding = 50; // Adjust the padding as needed
    const totalPadding = (cards.length - 1) * padding;
    const containerWidth = document.querySelector('.card-shuffle-container').offsetWidth;

    cards.forEach((card, index) => {
        const cardWidth = card.offsetWidth;
        const newPosition = (containerWidth - totalPadding - cardWidth) / 2 + index * (cardWidth + padding);

        card.style.left = `${newPosition}px`;
        card.style.zIndex = '1'; // Bring individual cards to the top
    });

    document.querySelector('.card-shuffle-container').style.zIndex = '1'; // Bring the entire card stack to the top
}

function hideCards() {
    const cards = document.querySelectorAll('.card-option');
    cards.forEach((card, index) => {
        card.style.left = `${index * 20}px`;
    });

    document.querySelector('.card-shuffle-container').style.zIndex = '1'; // Bring the entire card stack to the top
}
