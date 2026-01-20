const cards = document.querySelectorAll('.memory-card');
let firstCard, secondCard;
let lockBoard = false;

function flipCards() {
    if (lockBoard || this === firstCard) return;

    this.classList.add('flip'); 
    if (!firstCard) {
        firstCard = this; 
        return;
    }

    secondCard = this; 
    checkMatch();
}

function checkMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    
    if (isMatch) {
        
        firstCard.removeEventListener('click', flipCards);
        secondCard.removeEventListener('click', flipCards);
        resetBoard();
    } else {
        
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 500);
    }
}

function resetBoard() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}


cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 18);
    card.style.order = randomPos;
    card.addEventListener('click', flipCards);
});