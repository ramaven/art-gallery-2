window.addEventListener('load', () => {
  const title = document.querySelector('.hero-caption h1');
  const subtitle = document.querySelector('.hero-caption p');
  const arrow = document.querySelector('.scroll-indicator');

  if (!title || !subtitle) return;

  function typeText(element, speed, delay, onComplete) {
    const text = element.dataset.text;
    let index = 0;

    element.textContent = '';

    setTimeout(() => {
      const interval = setInterval(() => {
        element.textContent += text[index];
        index++;

        if (index >= text.length) {
          clearInterval(interval);
          if (onComplete) onComplete();
        }
      }, speed);
    }, delay);
  }

  // Sequence
  typeText(title, 90, 800);
  typeText(subtitle, 45, 2200, () => {
    if (arrow) {
      arrow.classList.add('visible');
    }
  });
});

/* Parallax */
window.addEventListener('scroll', () => {
  const bg = document.querySelector('.hero-bg');
  if (!bg) return;

  const scrollY = window.scrollY;
  bg.style.transform = `scale(1.1) translateY(${scrollY * 0.1}px)`;
});
