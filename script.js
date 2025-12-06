// Cellular Background Animation - Sky Blue Theme
class CellularBackground {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.cells = [];
        this.numCells = 80; // More cells but smaller
        this.resize();
        this.init();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        this.cells = [];
        // Sky blue color palette
        const blueShades = [
            [135, 206, 235], // Sky blue
            [176, 224, 230], // Powder blue
            [173, 216, 230], // Light blue
            [135, 206, 250], // Light sky blue
            [100, 149, 237], // Cornflower blue
            [70, 130, 180],  // Steel blue
            [65, 105, 225],  // Royal blue
            [30, 144, 255],  // Dodger blue
        ];
        
        for (let i = 0; i < this.numCells; i++) {
            const shade = blueShades[Math.floor(Math.random() * blueShades.length)];
            this.cells.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 15 + 5, // Much smaller: 5-20px instead of 50-150px
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                color: `rgba(${shade[0]}, ${shade[1]}, ${shade[2]}, ${Math.random() * 0.3 + 0.1})`
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw cells
        this.cells.forEach(cell => {
            // Update position
            cell.x += cell.vx;
            cell.y += cell.vy;

            // Bounce off edges
            if (cell.x < 0 || cell.x > this.canvas.width) cell.vx *= -1;
            if (cell.y < 0 || cell.y > this.canvas.height) cell.vy *= -1;

            // Draw cell
            this.ctx.beginPath();
            this.ctx.arc(cell.x, cell.y, cell.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = cell.color;
            this.ctx.fill();
        });

        // Draw connections with sky blue
        this.cells.forEach((cell, i) => {
            this.cells.slice(i + 1).forEach(otherCell => {
                const dx = cell.x - otherCell.x;
                const dy = cell.y - otherCell.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(cell.x, cell.y);
                    this.ctx.lineTo(otherCell.x, otherCell.y);
                    this.ctx.strokeStyle = `rgba(135, 206, 235, ${0.15 * (1 - distance / 120)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            });
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize cellular background
const canvas = document.getElementById('cellular-bg');
if (canvas) {
    new CellularBackground(canvas);
}

// Scroll effects for hero section
let lastScrollY = 0;
const heroImageContainer = document.querySelector('.hero-image-container');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    if (heroImageContainer && heroContent) {
        const imageScale = Math.max(0.7, 1 - scrollY * 0.0003);
        const imageTranslateZ = Math.min(150, scrollY * 0.4);
        const nameScale = Math.max(0.6, 1 - scrollY * 0.0015);
        const imageOpacity = Math.max(0.4, 1 - scrollY * 0.0008);
        
        heroImageContainer.style.transform = `scale(${imageScale}) perspective(1500px) translateZ(-${imageTranslateZ}px)`;
        heroImageContainer.style.opacity = imageOpacity;
        heroContent.style.transform = `scale(${nameScale})`;
    }
    
    lastScrollY = scrollY;
});

// Accordion functionality
document.addEventListener('DOMContentLoaded', () => {
    const accordionTriggers = document.querySelectorAll('.accordion-trigger');
    
    accordionTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const item = trigger.closest('.accordion-item');
            const isOpen = item.classList.contains('open');
            
            // Close all accordion items
            document.querySelectorAll('.accordion-item').forEach(i => {
                i.classList.remove('open');
            });
            
            // Toggle current item
            if (!isOpen) {
                item.classList.add('open');
            }
        });
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

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-card, .stat-card, .detail-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

