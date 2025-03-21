
function createSquares() {
  const container = document.querySelector(".animation-container");

  for (let i = 0; i < 30; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.width = `${Math.random() * 30 + 10}px`;
      square.style.height = `${Math.random() * 30 + 10}px`;
      square.style.left = `${Math.random() * 100}vw`;
      square.style.animationDuration = `${Math.random() * 15 + 5}s`;
      container.appendChild(square);
  }
}

createSquares();

// Select all cards
const cards = document.querySelectorAll('.card');

// Add animation class on load
window.addEventListener('load', () => {
  cards.forEach((card, index) => {
    // Delay for a cascading effect
    setTimeout(() => {
      card.classList.add('animate');
    }, index * 400);
  });
});

// Add interactive movement on hover
cards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.animation = 'none'; // Stop animation on hover
    card.style.transform = 'scale(1.1)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.animation = 'moveAndReturn 4s ease-in-out infinite';
    card.style.transform = 'scale(1)';
  });

  // Add slight parallax effect on mouse move
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateY = x * 20;
    const rotateX = -y * 20;

    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.05)`;
  });
});

