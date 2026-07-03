# 🏢 Zenith Global - Kurumsal Web Sitesi Template'i

Bu proje, özellikle **İnşaat, Yatırım, Dış Ticaret** ve holding düzeyindeki firmalar için tasarlanmış, **yüksek performanslı, premium tasarımlı ve 3 dilli (Türkçe, İngilizce, Arapça)** tamamen duyarlı (responsive) bir kurumsal web sitesi şablonudur.

Modern web standartlarına uygun olarak Vanilla JS ve CSS ile geliştirilmiş olup, herhangi bir ağır framework (React/Vue/Angular) bağımlılığı olmadan maksimum hız (Core Web Vitals optimizasyonlu) sunar.

## ✨ Özellikler

- **Çoklu Dil Desteği (i18n):** TR, EN ve AR dilleri arasında sayfa yenilenmeden (dinamik olarak) anında geçiş.
- **Premium Tasarım:** Altın sarısı, koyu gri ve beyaz tonlarının harmanlandığı, modern kurumsal kimliği yansıtan zarif ve "temiz" (clean) tasarım dili.
- **Yüksek Performans:** Sadece temel HTML/CSS/JS ile oluşturulmuş, `loading="lazy"` resim optimizasyonlarına sahip sıfır gecikmeli altyapı.
- **Mobil Uyumluluk:** CSS Grid ve Flexbox kullanılarak tasarlanmış, tüm cihazlarda kusursuz görünen responsive yapı.
- **Hazır Kurumsal Sayfalar:** 
  - Yönetim Kurulu
  - İnsan Kaynakları
  - Kalite Politikası
  - Müşteri İlişkileri
  - KVKK, Çerez Politikası ve Gizlilik Sözleşmeleri
- **Bileşenler:** FontAwesome ikon entegrasyonu, yapışkan (sticky) sidebar menüler, hero slider'lar, hover animasyonlu özellik kartları ve yasal makale düzenleri.

## 🛠️ Kurulum ve Kullanım

Şablonu kullanmak için herhangi bir derleme aracına ihtiyacınız yoktur. Projeyi bilgisayarınıza indirdikten sonra doğrudan `index.html` dosyasını tarayıcınızda açabilir veya bir lokal sunucu (örn. VS Code Live Server) ile çalıştırabilirsiniz.

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/KULLANICI_ADI/zenith-global-corp.git
   ```
2. Proje dizinine gidin ve dosyaları düzenlemeye başlayın.

## 📝 İçerik Yönetimi ve Çeviriler

Tüm metin içerikleri, dil seçenekleri ve çeviriler `translations.js` dosyası içerisinde tutulmaktadır. 
Sitedeki metinleri değiştirmek için HTML dosyalarıyla uğraşmanıza gerek yoktur, doğrudan `translations.js` dosyasındaki JSON objesini güncelleyebilirsiniz:

```javascript
const tr_new = {
    nav_home: "ANA SAYFA",
    ik_h2: "Bizimle Geleceği İnşa Edin",
    // Kendi metinlerinizi buraya ekleyin...
};
```

## 🚀 Yayına Alma (Deployment)

Proje statik dosyalardan (HTML, CSS, JS) oluştuğu için **Vercel, Netlify, GitHub Pages** veya klasik CPanel hosting hizmetleriyle saniyeler içinde yayına alınabilir.

```bash
# Vercel ile yayına almak için
npx vercel --prod
```

## 📄 Lisans

Bu proje açık kaynaklı olup, kişisel veya ticari projelerinizde (imzayı kaldırmadan veya uygun şekilde referans göstererek) kullanabilirsiniz.

---
**Tasarım & Geliştirme:** [Resul](https://bionluk.com/spungborb)
