// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Snipcart API Key
    const snipcartApiKey = 'ST_ZDJjMjY5ODctZjMyZC00N2VhLTkzNDItNjg0ZGFmYTY1YmY3NjM4NjY0MTQ3NTc5NTEyNjM1';

    // Waitlist Button and Modal
    const waitlistBtn = document.getElementById('waitlistBtn');
    if (waitlistBtn) {
        waitlistBtn.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.className = 'waitlist-modal';
            modal.innerHTML = `
                <div class="modal-content" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDesc">
                    <h2 id="modalTitle">Join the Cheese Club</h2>
                    <form id="waitlistForm" aria-labelledby="modalTitle">
                        <input type="email" placeholder="Enter your email" required aria-label="Email">
                        <button type="submit">Sign Up</button>
                    </form>
                    <button class="close-modal" aria-label="Close modal">×</button>
                </div>
            `;
            document.body.appendChild(modal);
            
            // Handle close button
            modal.querySelector('.close-modal').onclick = function() {
                modal.remove();
            };

            // Close modal when clicking outside
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        });
    }

    // Scroll to Top Button
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-top';
    scrollBtn.innerHTML = '↑';
    document.body.appendChild(scrollBtn);

    window.onscroll = function() {
        scrollBtn.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? 'block' : 'none';
    };

    scrollBtn.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Page Transitions
    document.body.classList.add('page-transition');

    // Navigation Hover Effects
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#FFC72C'; // Cheese yellow
        });
        link.addEventListener('mouseleave', function() {
            this.style.color = '#000000'; // Back to black
        });
    });

    // Contact Form Handler (if on contact page)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thanks for your message! We\'ll get back to you soon.');
            contactForm.reset();
        });
    }

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });

    // Easter egg - cheese rain
    let cheeseCount = 0;
    document.addEventListener('keydown', function(e) {
        const cheeseCode = [67, 72, 69, 69, 83, 69]; // 'CHEESE'
        if (e.keyCode === cheeseCode[cheeseCount]) {
            cheeseCount++;
            if (cheeseCount === cheeseCode.length) {
                makeItRain();
                cheeseCount = 0;
            }
        } else {
            cheeseCount = 0;
        }
    });

    function makeItRain() {
        for (let i = 0; i < 20; i++) {
            const cheese = document.createElement('div');
            cheese.className = 'cheese-rain';
            cheese.innerHTML = '🧀';
            cheese.style.left = Math.random() * 100 + 'vw';
            cheese.style.animationDuration = (Math.random() * 2 + 1) + 's';
            cheese.style.opacity = Math.random();
            document.body.appendChild(cheese);

            // Remove cheese emoji after animation
            setTimeout(() => {
                cheese.remove();
            }, 3000);
        }
    }
});

// Add this CSS to your style.css file for the cheese rain animation
const style = document.createElement('style');
style.textContent = `
    .cheese-rain {
        position: fixed;
        top: -20px;
        z-index: 1000;
        animation: fall linear forwards;
        pointer-events: none;
    }

    @keyframes fall {
        to {
            transform: translateY(100vh);
        }
    }
`;
document.head.appendChild(style); 
