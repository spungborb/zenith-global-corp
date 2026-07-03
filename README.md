# Zenith Global - Kurumsal Web Sitesi

Bu proje, Zenith Global firması için özel olarak tasarlanmış, **üretim ortamına hazır (production-ready)**, tek sayfa (Single Page Application hissiyatında) kurumsal bir web sitesidir.

## Özellikler & Mimari

- **Tamamen Vanilla Teknolojiler:** Herhangi bir framework (React, Vue) veya kütüphane (jQuery, Bootstrap) kullanılmadan sadece **HTML5, CSS3 ve JavaScript (ES6)** kullanılmıştır. Bu sayede maksimum hız, hafiflik ve sıfır dışa bağımlılık elde edilmiştir.
- **Tasarım Dili (UI/UX):** Koray GYO referans alınarak; temiz (clean), kurumsal, güven veren geniş beyaz/gri boşluklu estetik tercih edilmiştir. Ana renkler Gece Mavisi (Navy) ve Kurumsal Altın (Gold).
- **Responsive & A11y:** Tüm ekran boyutlarında test edilmiş, mobil için off-canvas menü eklenmiştir. Semantik HTML5 etiketleri ve erişilebilirlik kuralları gözetilmiştir.
- **Güvenlik & Hata Yönetimi (Error Handling):** 
  - Form verileri gönderilmeden önce detaylı JS validasyonundan geçer (boş alan, E-Posta Regex vb.).
  - Girdi verileri `sanitizeHTML` utility'si kullanılarak istemci tarafında temizlenir (XSS koruması simülasyonu ve mimarisi). 
- **Performans:** Modern CSS özellikleriyle ve `IntersectionObserver` ile animasyonlar scroll esnasında sadece ekrana girdiğinde tetiklenir, böylece CPU/GPU kaynak tüketimi minimumda tutulur.

## Dosya Yapısı

- `index.html`: SEO dostu meta etiketleri içeren, ana sayfa ve hakkımızda/hizmetler bölümlerini barındıran tam sayfa yapısı.
- `styles.css`: CSS Değişkenleri (Custom Properties) ile yapılandırılmış modüler, genişletilebilir ve temiz CSS kuralları. CSS reset, utility sınıfları ve section'lar modüler tutulmuştur.
- `script.js`: DOM manipulation, scroll casusluğu (scrollSpy), mobil menü, IntersectionObserver animasyon tetikleyicileri ve Güvenli Form Validasyon mantığı.
- `assets/`: Şirket logomuz (`logo.jpg`).

## Kurulum ve Çalıştırma

Statik bir proje olduğu için ekstra bir derleme (build) sürecine ihtiyaç duymaz. 
Herhangi bir HTTP sunucusu ile ayağa kaldırılabilir. 

Örnek olarak Python ile çalıştırmak için projenin kök dizininde:
```bash
python -m http.server 8080
```
Node.js (npx) ile çalıştırmak için:
```bash
npx serve -p 8080
```

Ardından tarayıcınızda `http://localhost:8080` adresine gidebilirsiniz.
