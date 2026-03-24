// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all fade-in-up elements
document.querySelectorAll('.fade-in-up').forEach(element => {
    observer.observe(element);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// CTA Button click handler
document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('#philosophy').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Add scroll animation to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Parallax effect for hero section (optional enhancement)
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.scrollY;
    hero.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
});

// Add staggered animation delays to cards
document.querySelectorAll('.philosophy-cards .card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`;
});

document.querySelectorAll('.works-grid .work-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.15}s`;
});

document.querySelectorAll('.legacy-grid .legacy-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.15}s`;
});

// Page load animation
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.animationPlayState = 'running';
    });
});
