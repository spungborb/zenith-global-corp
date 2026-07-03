document.addEventListener('DOMContentLoaded', () => {
    
    // Navbar Scroll Effect
    const navbar = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const mainNav = document.getElementById('mainNav');
    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('show');
        });
    }

    // Scroll Animation (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-up');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => fadeObserver.observe(el));

    // Form Validation and Sanitization (XSS Protection)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            // XSS Sanitizer
            const sanitizeHTML = (str) => {
                const temp = document.createElement('div');
                temp.textContent = str;
                return temp.innerHTML;
            };

            const name = sanitizeHTML(document.getElementById('name').value.trim());
            const email = sanitizeHTML(document.getElementById('email').value.trim());
            const subject = sanitizeHTML(document.getElementById('subject').value);
            const message = sanitizeHTML(document.getElementById('message').value.trim());
            const kvkk = document.getElementById('kvkk').checked;

            // Simple Regex for email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!name || !email || !subject || !message || !kvkk) {
                alert("Lütfen zorunlu alanları doldurunuz ve aydınlatma metnini onaylayınız.");
                return;
            }

            if (!emailRegex.test(email)) {
                alert("Lütfen geçerli bir e-posta adresi giriniz.");
                return;
            }

            // Simulate form submission
            btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Gönderiliyor...';
            btn.disabled = true;

            setTimeout(() => {
                alert(`Sayın ${name}, mesajınız başarıyla alınmıştır. En kısa sürede dönüş sağlanacaktır.`);
                contactForm.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }

    // --- I18N (Multilanguage Support) ---
    const updateLanguage = (lang) => {
        if (!window.translations || !window.translations[lang]) return;
        
        // Update document dir for Arabic
        document.documentElement.lang = lang;
        if(lang === 'ar') {
            document.documentElement.dir = 'rtl';
        } else {
            document.documentElement.dir = 'ltr';
        }

        const trans = window.translations[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (trans[key]) {
                if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    // Update placeholders for inputs
                    // Wait, we don't have placeholder attributes set via data-i18n, we set innerHTML or textContent
                }
                el.innerHTML = trans[key]; // Allow HTML (like <br>)
            }
        });

        // Set active language button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if(btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });

        localStorage.setItem('zenith_lang', lang);
    };

    // Listeners for Language Buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });

    // Initialize Language
    const savedLang = localStorage.getItem('zenith_lang') || 'tr';
    updateLanguage(savedLang);
});
