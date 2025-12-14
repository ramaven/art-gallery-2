// ---------- TYPEWRITER ----------
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

  typeText(title, 90, 800);
  typeText(subtitle, 45, 2200, () => {
    if (arrow) arrow.classList.add('visible');
  });
});

// ---------- PARALLAX ----------
window.addEventListener('scroll', () => {
  const bg = document.querySelector('.hero-bg');
  if (!bg) return;
  const scrollY = window.scrollY;
  bg.style.transform = `scale(1.1) translateY(${scrollY * 0.1}px)`;
});

// ---------- TOP BAR SHOW ON SCROLL ----------
const topBar = document.getElementById('topBar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    topBar.classList.add('show');
  } else {
    topBar.classList.remove('show');
  }
});

// ---------- HAMBURGER TOGGLE (MOBILE) ----------
const hamburger = document.getElementById('hamburger');
const dropdownMenu = document.getElementById('dropdownMenu');

hamburger.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

// Close menu if clicking outside (mobile)
window.addEventListener('click', (e) => {
  if (!dropdownMenu.contains(e.target) && !hamburger.contains(e.target)) {
    dropdownMenu.classList.remove('show');
  }
});
