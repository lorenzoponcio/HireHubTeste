document.addEventListener('DOMContentLoaded', function() {
  let currentIndex = 1;
  const cards = document.querySelectorAll('.card');

  function updateActiveCard() {
      cards.forEach((card, index) => {
          card.classList.toggle('active', index === currentIndex);
      });
  }

  window.moveLeft = function() {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateActiveCard();
  }

  window.moveRight = function() {
      currentIndex = (currentIndex + 1) % cards.length;
      updateActiveCard();
  }

  updateActiveCard();

  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        currentIndex = index;
        updateActiveCard();
    });
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        moveLeft();
    } else if (event.key === 'ArrowRight') {
        moveRight();
    }
});

// setInterval(() => {
//     moveRight();
// }, 10000); // 10 segundos

});


