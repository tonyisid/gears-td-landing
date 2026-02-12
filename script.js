// Hero video setup
const heroVideo = document.getElementById('heroVideo');
if (heroVideo) {
    // Ensure video plays
    heroVideo.play().catch(e => {
        console.log('Autoplay prevented:', e);
    });

    // Pause when video is not visible (performance)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroVideo.play();
            } else {
                heroVideo.pause();
            }
        });
    }, { threshold: 0.25 });

    observer.observe(heroVideo);
}

// Smooth scrolling for anchor links
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

// Add scroll-based animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Parallax effect for hero gears
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const gears = document.querySelectorAll('.gear');
    
    gears.forEach((gear, index) => {
        const speed = (index + 1) * 0.1;
        gear.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * speed * 10}deg)`;
    });
});

// Add hover sound effect simulation (visual feedback)
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-3px) scale(1.02)';
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0) scale(1)';
    });
});

// Screenshot lightbox
const screenshots = document.querySelectorAll('.screenshot');
screenshots.forEach(screenshot => {
    screenshot.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.className = 'lightbox-overlay';
        overlay.innerHTML = `
            <img src="${screenshot.src}" alt="${screenshot.alt}" class="lightbox-image">
            <button class="lightbox-close">&times;</button>
        `;
        document.body.appendChild(overlay);

        overlay.querySelector('.lightbox-close').addEventListener('click', () => {
            document.body.removeChild(overlay);
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                document.body.removeChild(overlay);
            }
        });
    });
});

// Console easter egg
console.log('%c⚙️ GEARS TOWER DEFENSE ⚙️', 
    'font-size: 20px; color: #d4a537; font-weight: bold; text-shadow: 2px 2px #a67c32;');
console.log('%c欢迎加入蒸汽朋克革命！', 
    'font-size: 14px; color: #e8e0d5;');
