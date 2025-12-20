// Array of gallery items
const galleryItems = [
  {
    image: 'assets/evening-forest.jpeg',
    title: 'Evening Glow',
    subtitle: 'Acrylic on canvas · 2023'
  },
  {
    image: 'assets/italy-abstract.jpeg',
    title: 'Astounding Architecture',
    subtitle: 'Acrylic on canvas · 2025'
  },
  {
    image: 'assets/beach-day.jpeg',
    title: "A Summer's Coast",
    subtitle: 'Watercolor · 2024'
  },
  {
    image: 'assets/mystical-tree.jpeg',
    title: 'Mystical Branches',
    subtitle: 'Acrylic on canvas · 2023'
  }
];

// Function to render gallery
const galleryGrid = document.getElementById('galleryGrid');

galleryItems.forEach(item => {
  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery-item');

  galleryItem.innerHTML = `
    <img src="${item.image}" alt="${item.title}">
    <div class="caption">
      <p>${item.title}</p>
      <p>${item.subtitle}</p>
    </div>
  `;

  galleryGrid.appendChild(galleryItem);
});


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

  // REMOVE OVERLAY AFTER FADE
  const fadeOverlay = document.querySelector(".hero-fade-overlay");
  if (fadeOverlay) {
    setTimeout(() => {
      fadeOverlay.remove();
    }, 2000);
  }

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

// ---------- HAMBURGER ----------
const hamburger = document.getElementById('hamburger');
const dropdownMenu = document.getElementById('dropdownMenu');

hamburger.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

// Close if clicking outside
window.addEventListener('click', (e) => {
  if (!dropdownMenu.contains(e.target) && !hamburger.contains(e.target)) {
    dropdownMenu.classList.remove('show');
  }
});

// ---------- RUNNERS FADE ----------
const runnersCaption = document.querySelector('.runners-caption');

if (runnersCaption) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(runnersCaption);
}
