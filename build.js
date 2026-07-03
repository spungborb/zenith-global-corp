const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const pages = [
    { name: 'ik', key: 'page_ik' },
    { name: 'musteri', key: 'page_musteri' },
    { name: 'yonetim', key: 'page_board' },
    { name: 'kalite', key: 'page_quality' },
    { name: 'kullanim', key: 'page_terms' },
    { name: 'gizlilik', key: 'page_privacy' },
    { name: 'kvkk', key: 'page_kvkk' },
    { name: 'cerez', key: 'page_cookie' },
    { name: 'bilgi', key: 'page_society' },
    { name: 'proje-detay', key: 'page_project' }
];

const template = `<!DOCTYPE html>
<html lang="tr" dir="ltr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <title>Zenith Global | <span data-i18n="{{key}}_title">Title</span></title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <link rel="stylesheet" href="styles.min.css">
</head>
<body class="bg-light-grey">

    <!-- Topbar -->
    <div class="topbar">
        <div class="container topbar-inner">
            <div class="topbar-contact">
                <span><i class="fas fa-phone-alt"></i> <span data-i18n="top_phone">+90 212 555 0000</span></span>
                <span><i class="fas fa-envelope"></i> <span data-i18n="top_email">info@zenithglobal.com.tr</span></span>
            </div>
            <div class="topbar-links">
                <a href="musteri.html" data-i18n="link_customer">Müşteri İlişkileri</a>
                <a href="ik.html" data-i18n="link_hr">İnsan Kaynakları</a>
                <div class="language-selector" id="langSelector">
                    <span class="lang-btn" data-lang="tr">TR</span> | 
                    <span class="lang-btn" data-lang="en">EN</span> | 
                    <span class="lang-btn" data-lang="ar">AR</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Header / Navbar -->
    <header class="header" id="header">
        <div class="container navbar-container">
            <a href="index.html" class="logo-link" title="Zenith Global">
                <img src="assets/logo.jpg" alt="Zenith Global Logo" class="brand-logo" loading="lazy">
                <span class="brand-text">ZENITH <br><small>GLOBAL</small></span>
            </a>
            
            <nav class="main-nav" id="mainNav">
                <ul class="nav-list">
                    <li><a href="index.html" class="nav-link" data-i18n="nav_home">ANA SAYFA</a></li>
                    <li><a href="index.html#about" class="nav-link" data-i18n="nav_about">HAKKIMIZDA</a></li>
                    <li><a href="index.html#services" class="nav-link" data-i18n="nav_services">HİZMETLERİMİZ</a></li>
                    <li><a href="index.html#projects" class="nav-link" data-i18n="nav_projects">PROJELER</a></li>
                    <li><a href="index.html#contact" class="nav-link" data-i18n="nav_contact">İLETİŞİM</a></li>
                </ul>
            </nav>

            <button class="mobile-toggle" id="mobileToggle" aria-label="Menu">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </header>

    <main>
        <section class="py-section bg-white" style="min-height: 50vh; padding-top: 120px;">
            <div class="container">
                <h1 class="section-heading" data-i18n="{{key}}_title">Başlık</h1>
                <p class="lead-text mt-4" data-i18n="{{key}}_content">İçerik yükleniyor...</p>
                <p data-i18n="page_placeholder_text">Bu sayfanın içeriği hazırlanmaktadır.</p>
                
                <a href="index.html" class="btn btn-primary mt-5" data-i18n="nav_home">Ana Sayfaya Dön</a>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer bg-dark text-white">
        <div class="container footer-top">
            <div class="row footer-row">
                <div class="footer-col brand-col">
                    <img src="assets/logo.jpg" alt="Zenith Global" class="footer-logo mb-3" loading="lazy">
                    <p class="footer-desc" data-i18n="ft_desc">Uluslararası arenada inşaat, stratejik yatırım ve dış ticaretin vizyoner, güvenilir ve yenilikçi gücü.</p>
                    <div class="social-links mt-4">
                        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                
                <div class="footer-col links-col">
                    <h4 class="footer-heading" data-i18n="ft_corp">Kurumsal</h4>
                    <ul class="footer-nav">
                        <li><a href="index.html#about" data-i18n="nav_about">Hakkımızda</a></li>
                        <li><a href="yonetim.html" data-i18n="ft_board">Yönetim Kurulu</a></li>
                        <li><a href="ik.html" data-i18n="link_hr">İnsan Kaynakları</a></li>
                        <li><a href="kalite.html" data-i18n="ft_quality">Kalite Politikamız</a></li>
                    </ul>
                </div>
                
                <div class="footer-col links-col">
                    <h4 class="footer-heading" data-i18n="ft_activities">Faaliyetler</h4>
                    <ul class="footer-nav">
                        <li><a href="index.html#services" data-i18n="srv_const_title">İnşaat Projeleri</a></li>
                        <li><a href="index.html#services" data-i18n="srv_inv_title">Gayrimenkul Yatırımları</a></li>
                        <li><a href="index.html#services" data-i18n="srv_trd_title">Küresel Ticaret</a></li>
                    </ul>
                </div>
                
                <div class="footer-col links-col">
                    <h4 class="footer-heading" data-i18n="ft_legal">Yasal Uyarılar</h4>
                    <ul class="footer-nav">
                        <li><a href="kullanim.html" data-i18n="ft_terms">Kullanım Koşulları</a></li>
                        <li><a href="gizlilik.html" data-i18n="ft_privacy">Gizlilik Politikası</a></li>
                        <li><a href="kvkk.html" data-i18n="page_kvkk_title">KVKK Aydınlatma Metni</a></li>
                        <li><a href="cerez.html" data-i18n="ft_cookie">Çerez Politikası</a></li>
                        <li><a href="bilgi.html" data-i18n="ft_society">Bilgi Toplumu Hizmetleri</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <div class="container d-flex justify-between align-center mobile-col">
                <p class="copyright m-0" data-i18n="ft_copy">&copy; 2026 Zenith Global Anonim Şirketi. Tüm Hakları Saklıdır.</p>
                <p class="credit m-0" data-i18n="ft_credit">Tasarım & Geliştirme: Kurumsal Web Çözümleri</p>
            </div>
        </div>
    </footer>

    <script src="translations.js"></script>
    <script src="script.min.js"></script>
</body>
</html>`;

pages.forEach(p => {
    let content = template.replace(/{{key}}/g, p.key);
    fs.writeFileSync(path.join(__dirname, p.name + '.html'), content);
});

console.log("Pages generated.");

// Minify CSS and JS using npx
try {
    execSync('npx terser script.js -o script.min.js -c -m', { stdio: 'inherit' });
    execSync('npx clean-css-cli -o styles.min.css styles.css', { stdio: 'inherit' });
    console.log("Minification complete.");
} catch (e) {
    console.error("Minification failed. Falling back to copy.");
    fs.copyFileSync('script.js', 'script.min.js');
    fs.copyFileSync('styles.css', 'styles.min.css');
}
