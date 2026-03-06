// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animation Observer Options
const observerOptions = {
    threshold: 0.1
};

// Reveal on Scroll Base Logic
const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, observerOptions);

document.querySelectorAll('section, .env-image, .env-content').forEach(el => {
    revealOnScroll.observe(el);
});

// Staggered Reveal for grids
const revealStaggered = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.student-card, .admission-item, .ayat-card');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('reveal');
                }, index * 150);
            });
        }
    });
}, observerOptions);

document.querySelectorAll('.students-grid, .admission-grid, .ayat-container').forEach(grid => {
    revealStaggered.observe(grid);
});

// Hero Parallax Effect
const hero = document.querySelector('.hero');
if (hero) {
    hero.addEventListener('mousemove', (e) => {
        const amount = 20;
        const x = (e.clientX / window.innerWidth - 0.5) * amount;
        const y = (e.clientY / window.innerHeight - 0.5) * amount;
        const h1 = hero.querySelector('h1');
        const p = hero.querySelector('p');
        if (h1) h1.style.transform = `translate(${x}px, ${y}px)`;
        if (p) p.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
