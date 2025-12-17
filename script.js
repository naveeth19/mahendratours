// ============================================
// Mahendra Travels - JavaScript
// ============================================

(function() {
    'use strict';

    // ============================================
    // Smooth Scrolling
    // ============================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // Navbar Scroll Effect
    // ============================================
    
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    function handleNavbarScroll() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }

    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll(); // Initial check

    // ============================================
    // Intersection Observer for Animations
    // ============================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Handle stagger animations
                if (entry.target.classList.contains('fade-up-stagger')) {
                    const children = entry.target.querySelectorAll('.fade-up-stagger-item');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('visible');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.addEventListener('DOMContentLoaded', () => {
        // Hero animations
        const heroHeading = document.querySelector('.hero-heading');
        const heroSubheading = document.querySelector('.hero-subheading');
        const heroDescription = document.querySelector('.hero-description');
        const heroCtas = document.querySelector('.hero-ctas');
        const heroImage = document.querySelector('.hero-image-container');

        if (heroHeading) {
            setTimeout(() => heroHeading.classList.add('visible'), 100);
        }
        if (heroSubheading) {
            setTimeout(() => heroSubheading.classList.add('visible'), 300);
        }
        if (heroDescription) {
            setTimeout(() => heroDescription.classList.add('visible'), 500);
        }
        if (heroCtas) {
            setTimeout(() => heroCtas.classList.add('visible'), 700);
        }
        if (heroImage) {
            setTimeout(() => {
                heroImage.style.opacity = '1';
                heroImage.style.transform = 'translateX(0)';
            }, 200);
        }

        // Observe fade-up elements
        document.querySelectorAll('.fade-up, .fade-up-delay, .fade-up-delay-2, .fade-up-stagger').forEach(el => {
            observer.observe(el);
        });

        // Observe fleet items
        document.querySelectorAll('.fleet-item').forEach((item, index) => {
            observer.observe(item);
            
            // Add delay based on animation type
            item.style.transitionDelay = `${index * 100}ms`;
        });

        // Observe icon items
        document.querySelectorAll('.fade-up-stagger-item').forEach((item, index) => {
            observer.observe(item);
        });
    });

    // ============================================
    // Parallax Effect for Hero Image
    // ============================================
    
    const heroImageContainer = document.querySelector('.hero-image-container');
    
    if (heroImageContainer) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroSection = document.querySelector('.hero-section');
            
            if (heroSection && scrolled < heroSection.offsetHeight) {
                const parallaxSpeed = 0.3;
                const yPos = -(scrolled * parallaxSpeed);
                heroImageContainer.style.transform = `translateY(${yPos}px)`;
            }
        });
    }

    // ============================================
    // Fleet Card Hover Effects
    // ============================================
    
    document.querySelectorAll('.fleet-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ============================================
    // Form Handling
    // ============================================
    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Simulate form submission
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert('Thank you for your inquiry! We will contact you soon.');
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);
        });
    }

    // ============================================
    // Mobile Menu Close on Link Click
    // ============================================
    
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });

    // ============================================
    // Active Navigation Link Highlighting
    // ============================================
    
    const sections = document.querySelectorAll('section[id]');
    const navLinksArray = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
    
    function highlightActiveSection() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinksArray.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Initial check

    // ============================================
    // Image Lazy Loading Enhancement
    // ============================================
    
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }

    // ============================================
    // Scroll-triggered Animations for Fleet Items
    // ============================================
    
    const fleetObserverOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const fleetObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 150);
                fleetObserver.unobserve(entry.target);
            }
        });
    }, fleetObserverOptions);

    document.querySelectorAll('.fleet-item').forEach(item => {
        fleetObserver.observe(item);
    });

    // ============================================
    // Add Active State to Nav Links
    // ============================================
    
    navLinksArray.forEach(link => {
        link.addEventListener('click', function() {
            navLinksArray.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // ============================================
    // Performance Optimization: Debounce Scroll
    // ============================================
    
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debounce to scroll handlers
    const debouncedNavbarScroll = debounce(handleNavbarScroll, 10);
    const debouncedHighlightActive = debounce(highlightActiveSection, 100);

    window.addEventListener('scroll', () => {
        debouncedNavbarScroll();
        debouncedHighlightActive();
    });

    // ============================================
    // Preloader
    // ============================================
    
    const preloader = document.getElementById('preloader');
    const body = document.body;
    
    // Add preloader-active class to body initially
    if (preloader) {
        body.classList.add('preloader-active');
    }
    
    function hidePreloader() {
        if (preloader) {
            preloader.classList.add('hidden');
            body.classList.remove('preloader-active');
            // Remove preloader from DOM after animation
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }
    
    // Hide preloader when page is fully loaded
    window.addEventListener('load', () => {
        // Wait a bit for the progress bar to complete (progress animation is 2s)
        setTimeout(() => {
            hidePreloader();
        }, 600);
    });
    
    // Fallback: Hide preloader after max 3 seconds even if load event doesn't fire
    setTimeout(() => {
        if (preloader && !preloader.classList.contains('hidden')) {
            hidePreloader();
        }
    }, 3000);

    // ============================================
    // Initialize on Load
    // ============================================
    
    window.addEventListener('load', () => {
        // Ensure all animations are ready
        document.body.classList.add('loaded');
        
        // Trigger initial animations
        const heroElements = document.querySelectorAll('.hero-content > *');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });
    });

    // ============================================
    // Console Welcome Message
    // ============================================
    
    console.log('%c🚗 Mahendra Travels', 'color: #0072FF; font-size: 20px; font-weight: bold;');
    console.log('%cExplore. Discover. Journey.', 'color: #00C4B3; font-size: 14px;');

})();

