/* ═══════════════════════════════════════════════════════════
   script.js — Ralph Waldo Emerson & Transcendentalism
   ═══════════════════════════════════════════════════════════ */

/* ─── 1. NAVBAR: fade in on scroll ─── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ─── 2. MOBILE NAV TOGGLE ─── */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ─── 3. HERO REVEAL — fire immediately on load ─── */
window.addEventListener('DOMContentLoaded', () => {
  // Stagger the hero elements in right away
  document.querySelectorAll('.reveal').forEach((el, i) => {
    // Small setTimeout so the browser has painted first
    setTimeout(() => {
      el.classList.add('is-visible');
    }, 80 + i * 60);
  });
});

/* ─── 4. SCROLL-TRIGGERED FADE-IN (IntersectionObserver) ─── */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Once visible, stop watching
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,       // element must be 12% visible before triggering
    rootMargin: '0px 0px -40px 0px'  // trigger slightly before fully in view
  }
);

// Observe everything with the fade-in class
document.querySelectorAll('.fade-in-section').forEach(el => {
  observer.observe(el);
});

/* ─── 5. FLIP CARDS — toggle on click (for touch / mobile) ─── */
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

/* ─── 6. SMOOTH SCROLL with offset for fixed navbar ─── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();

    const navbarHeight = navbar.offsetHeight;
    const targetTop    = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: targetTop - navbarHeight - 16,  // 16px breathing room
      behavior: 'smooth'
    });
  });
});