// Optional subtle parallax effect
window.addEventListener('scroll', () => {
  const bg = document.querySelector('.hero-bg');
  const scrollY = window.scrollY;

  bg.style.transform = `scale(1.1) translateY(${scrollY * 0.1}px)`;
});
