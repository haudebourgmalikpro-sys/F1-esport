// ===========================
//  F1 ESPORT LEAGUE - JS
// ===========================

// --- PAGE LOADER ---
window.addEventListener('load', () => {
  const loader = document.querySelector('.page-loader');
  if (loader) {
    setTimeout(() => loader.classList.add('loaded'), 400);
  }
});

// --- NAVBAR SCROLL ---
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });
}

// --- MOBILE TOGGLE ---
const navToggle = document.getElementById('navToggle');
const navLinks  = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.classList.toggle('active');
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
    }
  });
}

// --- SCROLL PROGRESS BAR ---
const scrollProgress = document.querySelector('.scroll-progress');
if (scrollProgress) {
  window.addEventListener('scroll', () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / docHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
  });
}

// --- PARALLAX HERO ---
const heroContent = document.querySelector('.hero-content');
const heroLines = document.querySelector('.hero-lines');
const heroGrid = document.querySelector('.hero-grid');
if (heroContent) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      heroContent.style.transform = `translateY(${y * 0.3}px)`;
      heroContent.style.opacity = 1 - (y / (window.innerHeight * 0.8));
      if (heroLines) heroLines.style.transform = `translateY(${y * 0.15}px)`;
      if (heroGrid) heroGrid.style.transform = `translateY(${y * 0.1}px)`;
    }
  });
}

// --- BACK TO TOP ---
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// --- COUNTER ANIMATION ---
const STAGGER_DELAY = 0.05;

function animateCount(el, target, duration = 1500) {
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(ease * target);
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      if (!isNaN(target)) animateCount(el, target);
      statsObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number[data-target]').forEach(el => {
  statsObserver.observe(el);
});

// --- FADE IN ON SCROLL ---
const fadeEls = document.querySelectorAll(
  '.team-card, .race-item, .standing-item, .team-full-card, .tfc-body, .cal-card, .contact-social-card, .faq-item'
);
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

fadeEls.forEach((el, i) => {
  el.classList.add('fade-init');
  el.style.transitionDelay = `${Math.min(i * STAGGER_DELAY, 0.6)}s`;
  fadeObserver.observe(el);
});

// --- CASCADE SLIDE FROM LEFT (classement rows) ---
const slideEls = document.querySelectorAll('.class-row');
const slideObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-left-visible');
      slideObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

slideEls.forEach((el, i) => {
  el.classList.add('slide-left-init');
  el.style.transitionDelay = `${i * 0.06}s`;
  slideObserver.observe(el);
});
