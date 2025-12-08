// Bento + Story Hybrid Interactions

document.addEventListener('DOMContentLoaded', () => {
    
    // Staggered fade-in for bento cards on load
    const bentoCards = document.querySelectorAll('.bento-card');
    bentoCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });

    // Scroll-triggered animations for story sections
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe chapter content and bento grids within chapters
    document.querySelectorAll('.chapter-content, .cap-card, .about-text-card, .about-video-card, .about-edu-card, .about-fun-card, .toolkit-card, .exp-card, .case-item, .fact-card, .interest-card, .philosophy-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = `opacity 0.7s ease ${index * 0.03}s, transform 0.7s ease ${index * 0.03}s`;
        observer.observe(el);
    });

    // Add visible class styles
    const style = document.createElement('style');
    style.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Smooth chapter line animation
    const chapterLines = document.querySelectorAll('.chapter-line');
    const lineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.background = 'linear-gradient(to bottom, var(--text-muted), var(--border))';
            }
        });
    }, { threshold: 0.5 });

    chapterLines.forEach(line => lineObserver.observe(line));

    // Accordion functionality (for other pages)
    const accordionTriggers = document.querySelectorAll('.accordion-trigger');
    accordionTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const item = trigger.closest('.accordion-item');
            const isOpen = item.classList.contains('open');
            
            document.querySelectorAll('.accordion-item').forEach(i => {
                i.classList.remove('open');
            });
            
            if (!isOpen) {
                item.classList.add('open');
            }
        });
    });

    // Case Study Accordion functionality
    const caseTriggers = document.querySelectorAll('.case-trigger');
    console.log('Found case triggers:', caseTriggers.length); // Debug log
    
    caseTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const item = trigger.closest('.case-item');
            console.log('Clicked case item:', item); // Debug log
            
            if (!item) return;
            
            const isOpen = item.classList.contains('open');
            
            // Close all other case items
            document.querySelectorAll('.case-item').forEach(i => {
                i.classList.remove('open');
            });
            
            // Toggle current item
            if (!isOpen) {
                item.classList.add('open');
                // Scroll to the item smoothly
                setTimeout(() => {
                    item.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });
    });

    // Smooth scroll for anchor links
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

    // Subtle parallax on hero video
    const heroVideo = document.querySelector('.bento-video');
    if (heroVideo) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const maxScroll = window.innerHeight;
            if (scrollY < maxScroll) {
                const progress = scrollY / maxScroll;
                heroVideo.style.transform = `scale(${1 + progress * 0.05})`;
            }
        }, { passive: true });
    }

});
