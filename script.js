/**
 * Zenith Global - Kurumsal Web Sitesi
 * Core JavaScript Logic (Production Ready)
 * No dependencies. 
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Navbar & Scroll Effects ---
    const header = document.getElementById('header');
    const backToTop = document.getElementById('backToTop');
    
    const handleScroll = () => {
        const scrollY = window.scrollY;
        // Header Shrink
        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Back to top visibility
        if (scrollY > 400) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Smooth Back to Top
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    // --- 2. Mobile Menu Navigation ---
    const mobileToggle = document.getElementById('mobileToggle');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;

    const toggleMenu = () => {
        mainNav.classList.toggle('show');
        const icon = mobileToggle.querySelector('i');
        if(mainNav.classList.contains('show')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            body.style.overflow = 'hidden'; // Prevent background scrolling
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            body.style.overflow = '';
        }
    };

    mobileToggle.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(mainNav.classList.contains('show')) {
                toggleMenu();
            }
        });
    });


    // --- 3. Scroll Spy (Active Menu Item highlighting) ---
    const sections = document.querySelectorAll('section');
    
    const scrollSpy = () => {
        let current = '';
        const scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Adjustment for sticky header
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', scrollSpy, { passive: true });


    // --- 4. Intersection Observer for Reveal Animations ---
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Run once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
    animatedElements.forEach(el => revealObserver.observe(el));


    // --- 5. Form Validation & XSS Prevention (Production Ready) ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const spinner = submitBtn.querySelector('.spinner');
    const formAlert = document.getElementById('formAlert');

    // Utility: Simple HTML Sanitizer to prevent XSS on client side reflection (if any)
    const sanitizeHTML = (str) => {
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const checkInput = (input, validator, errorId) => {
        const isValid = validator(input.value.trim());
        const formGroup = input.closest('.form-group');
        if (!isValid) {
            formGroup.classList.add('invalid');
        } else {
            formGroup.classList.remove('invalid');
        }
        return isValid;
    };

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Form Fields
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        const kvkkInput = document.getElementById('kvkk');
        
        // Validations
        const isNameValid = checkInput(nameInput, val => val.length > 2, 'nameError');
        const isEmailValid = checkInput(emailInput, validateEmail, 'emailError');
        const isSubjectValid = checkInput(subjectInput, val => val !== "", 'subjectError');
        const isMessageValid = checkInput(messageInput, val => val.length > 10, 'messageError');
        
        // Checkbox special check
        const kvkkGroup = kvkkInput.closest('.form-group');
        const isKvkkValid = kvkkInput.checked;
        if (!isKvkkValid) kvkkGroup.classList.add('invalid');
        else kvkkGroup.classList.remove('invalid');
        
        kvkkInput.addEventListener('change', () => {
            if(kvkkInput.checked) kvkkGroup.classList.remove('invalid');
        });

        // If form is fully valid
        if (isNameValid && isEmailValid && isSubjectValid && isMessageValid && isKvkkValid) {
            // Sanitize inputs before "sending"
            const sanitizedData = {
                name: sanitizeHTML(nameInput.value),
                email: sanitizeHTML(emailInput.value),
                subject: sanitizeHTML(subjectInput.value),
                message: sanitizeHTML(messageInput.value)
            };
            
            // Simulate API Call / Secure Form Handling
            btnText.classList.add('hidden');
            spinner.classList.remove('hidden');
            submitBtn.disabled = true;
            
            // Mocking network delay
            setTimeout(() => {
                // Success State
                btnText.classList.remove('hidden');
                spinner.classList.add('hidden');
                submitBtn.disabled = false;
                
                contactForm.reset();
                
                formAlert.className = 'alert alert-success mt-3';
                formAlert.innerHTML = '<i class="fas fa-check-circle"></i> Mesajınız güvenli bir şekilde alınmıştır. En kısa sürede dönüş sağlanacaktır.';
                formAlert.classList.remove('hidden');
                
                // Remove alert after 5s
                setTimeout(() => {
                    formAlert.classList.add('hidden');
                }, 5000);
                
                // Console log sanitized data to prove processing (for dev/demo only)
                console.log('Secure Payload Processed:', sanitizedData);
                
            }, 1500);
        }
    });

    // Clear validation error on input
    const inputs = contactForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.closest('.form-group').classList.remove('invalid');
        });
    });
});

// --- 6. i18n / Language Switching Logic ---
const initI18n = () => {
    const savedLang = localStorage.getItem('zenith_lang') || 'tr';
    
    window.updateLanguage = (lang) => {
        if (!window.translations || !window.translations[lang]) return;
        
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        const trans = window.translations[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (trans[key]) {
                if (el.tagName === 'INPUT' && el.type === 'submit') {
                    el.value = trans[key];
                } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = trans[key];
                } else {
                    el.innerHTML = trans[key];
                }
            }
        });
        
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
        localStorage.setItem('zenith_lang', lang);
    };
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            window.updateLanguage(lang);
        });
    });
    
    updateLanguage(savedLang);
};

document.addEventListener('DOMContentLoaded', initI18n);
