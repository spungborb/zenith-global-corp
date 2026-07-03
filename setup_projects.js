const fs = require('fs');

// 1. Generate the 3 project HTML files
const template = fs.readFileSync('proje-detay.html', 'utf8');

const projects = [
    {
        id: 'zenith',
        prefix: 'pz',
        img: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        title: 'Zenith Tower Levent'
    },
    {
        id: 'aura',
        prefix: 'pa',
        img: 'assets/lojistik.jpg',
        title: 'Aura Global Lojistik Merkezi'
    },
    {
        id: 'nexus',
        prefix: 'pn',
        img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        title: 'NEXUS Yaşam Kompleksi'
    }
];

projects.forEach(p => {
    let content = template;
    content = content.replace(/pd_/g, p.prefix + '_');
    content = content.replace(/<img src="[^"]+" alt="[^"]+" class="project-detail-header">/g, `<img src="${p.img}" alt="${p.title}" class="project-detail-header">`);
    content = content.replace(/<title>.*?<\/title>/g, `<title>${p.title} | Zenith Global</title>`);
    fs.writeFileSync(`proje-${p.id}.html`, content, 'utf8');
});

// 2. Update index.html links
let index = fs.readFileSync('index.html', 'utf8');
let n = 0;
index = index.replace(/href="proje-detay\.html"/g, (match) => {
    let newHref = `href="proje-${projects[n].id}.html"`;
    n++;
    if(n >= projects.length) n = 0; // Just in case it matches more than 3
    return newHref;
});
fs.writeFileSync('index.html', index, 'utf8');

// 3. Update translations.js
let trans = fs.readFileSync('translations.js', 'utf8');

const newTr = `
        "pz_s1_t": "Lokasyon",
        "pz_s1_v": "Levent, İstanbul",
        "pz_s2_t": "Toplam Alan",
        "pz_s2_v": "120,000 m²",
        "pz_s3_t": "Proje Tipi",
        "pz_s3_v": "Ticari / Ofis",
        "pz_s4_t": "Durum",
        "pz_s4_v": "Tamamlandı",
        "pz_h2": "Modern Mimarinin Merkezinde",
        "pz_p1": "Zenith Tower Levent projemiz, modern mimarinin ve ileri mühendisliğin eşsiz birer örneğidir. Şehrin kalbinde iş dünyasına prestij katmaktadır.",
        "pz_p2": "Akıllı otomasyon sistemleri, LEED Sertifikalı yeşil bina özellikleri ve panoramik şehir manzarasıyla iş dünyasının yeni merkezidir.",

        "pa_s1_t": "Lokasyon",
        "pa_s1_v": "Gebze, Kocaeli",
        "pa_s2_t": "Toplam Alan",
        "pa_s2_v": "250,000 m²",
        "pa_s3_t": "Proje Tipi",
        "pa_s3_v": "Endüstriyel",
        "pa_s4_t": "Durum",
        "pa_s4_v": "Devam Ediyor",
        "pa_h2": "Küresel Ticaretin Lojistik Üssü",
        "pa_p1": "Aura Global Lojistik Merkezi, uluslararası tedarik zinciri yönetiminde maksimum verimliliği sağlamak için özel olarak tasarlandı.",
        "pa_p2": "Tam otomatik depolama sistemleri, yeşil enerji kullanımı ve stratejik konumu ile bölgenin en büyük ve en modern endüstriyel üssüdür.",

        "pn_s1_t": "Lokasyon",
        "pn_s1_v": "Bodrum, Muğla",
        "pn_s2_t": "Toplam Alan",
        "pn_s2_v": "85,000 m²",
        "pn_s3_t": "Proje Tipi",
        "pn_s3_v": "Konut / Rezidans",
        "pn_s4_t": "Durum",
        "pn_s4_v": "Planlama Aşamasında",
        "pn_h2": "Doğa ve Lüksün Buluşma Noktası",
        "pn_p1": "NEXUS Yaşam Kompleksi, lüks rezidans konforunu doğayla iç içe sunan, mimari tasarımıyla fark yaratan özel bir projedir.",
        "pn_p2": "Sürdürülebilir peyzaj alanları, sosyal tesisler ve ileri düzey güvenlik sistemleriyle hayalinizdeki yaşamı gerçeğe dönüştürüyor.",`;

const newEn = `
        "pz_s1_t": "Location",
        "pz_s1_v": "Levent, Istanbul",
        "pz_s2_t": "Total Area",
        "pz_s2_v": "120,000 m²",
        "pz_s3_t": "Project Type",
        "pz_s3_v": "Commercial / Office",
        "pz_s4_t": "Status",
        "pz_s4_v": "Completed",
        "pz_h2": "At the Center of Modern Architecture",
        "pz_p1": "Our Zenith Tower Levent project is a unique example of modern architecture and advanced engineering. It adds prestige to the business world in the heart of the city.",
        "pz_p2": "It is the new center of the business world with its smart automation systems, LEED Certified green building features, and panoramic city views.",

        "pa_s1_t": "Location",
        "pa_s1_v": "Gebze, Kocaeli",
        "pa_s2_t": "Total Area",
        "pa_s2_v": "250,000 m²",
        "pa_s3_t": "Project Type",
        "pa_s3_v": "Industrial",
        "pa_s4_t": "Status",
        "pa_s4_v": "Ongoing",
        "pa_h2": "Logistics Base of Global Trade",
        "pa_p1": "Aura Global Logistics Center is specially designed to provide maximum efficiency in international supply chain management.",
        "pa_p2": "It is the region's largest and most modern industrial base with fully automated storage systems, green energy use, and strategic location.",

        "pn_s1_t": "Location",
        "pn_s1_v": "Bodrum, Mugla",
        "pn_s2_t": "Total Area",
        "pn_s2_v": "85,000 m²",
        "pn_s3_t": "Project Type",
        "pn_s3_v": "Residential",
        "pn_s4_t": "Status",
        "pn_s4_v": "Planning Phase",
        "pn_h2": "Meeting Point of Nature and Luxury",
        "pn_p1": "NEXUS Living Complex is a special project that makes a difference with its architectural design, offering luxury residence comfort intertwined with nature.",
        "pn_p2": "It turns your dream life into reality with sustainable landscape areas, social facilities, and advanced security systems.",`;

const newAr = `
        "pz_s1_t": "الموقع",
        "pz_s1_v": "ليفينت، إسطنبول",
        "pz_s2_t": "المساحة الإجمالية",
        "pz_s2_v": "120,000 م²",
        "pz_s3_t": "نوع المشروع",
        "pz_s3_v": "تجاري / مكتب",
        "pz_s4_t": "الحالة",
        "pz_s4_v": "مكتمل",
        "pz_h2": "في مركز العمارة الحديثة",
        "pz_p1": "مشروع زينيث تاور ليفينت هو مثال فريد للعمارة الحديثة والهندسة المتقدمة. يضيف هيبة لعالم الأعمال في قلب المدينة.",
        "pz_p2": "إنه المركز الجديد لعالم الأعمال بفضل أنظمة الأتمتة الذكية، وميزات البناء الأخضر المعتمدة من LEED، والإطلالات البانورامية على المدينة.",

        "pa_s1_t": "الموقع",
        "pa_s1_v": "جيبزي، قوجه ايلي",
        "pa_s2_t": "المساحة الإجمالية",
        "pa_s2_v": "250,000 م²",
        "pa_s3_t": "نوع المشروع",
        "pa_s3_v": "صناعي",
        "pa_s4_t": "الحالة",
        "pa_s4_v": "مستمر",
        "pa_h2": "القاعدة اللوجستية للتجارة العالمية",
        "pa_p1": "تم تصميم مركز أورا جلوبال اللوجستي خصيصًا لتوفير أقصى قدر من الكفاءة في إدارة سلسلة التوريد الدولية.",
        "pa_p2": "إنها أكبر وأحدث قاعدة صناعية في المنطقة تتميز بأنظمة تخزين مؤتمتة بالكامل واستخدام الطاقة الخضراء وموقع استراتيجي.",

        "pn_s1_t": "الموقع",
        "pn_s1_v": "بودروم، موغلا",
        "pn_s2_t": "المساحة الإجمالية",
        "pn_s2_v": "85,000 م²",
        "pn_s3_t": "نوع المشروع",
        "pn_s3_v": "سكني",
        "pn_s4_t": "الحالة",
        "pn_s4_v": "مرحلة التخطيط",
        "pn_h2": "نقطة التقاء الطبيعة والفخامة",
        "pn_p1": "مجمع نيكزس السكني هو مشروع خاص يصنع الفارق بتصميمه المعماري، ويقدم راحة الإقامة الفاخرة المتشابكة مع الطبيعة.",
        "pn_p2": "يحول حياة أحلامك إلى حقيقة واقعة من خلال مناطق المناظر الطبيعية المستدامة والمرافق الاجتماعية وأنظمة الأمان المتقدمة.",`;

let lines = trans.split('\\n');
let block = 0;
let output = [];
for(let line of lines) {
    output.push(line);
    if(line.includes('"pd_p2":')) {
        if(block === 0) output.push(newTr);
        if(block === 1) output.push(newEn);
        if(block === 2) output.push(newAr);
        block++;
    }
}
fs.writeFileSync('translations.js', output.join('\\n'), 'utf8');
console.log('Projects created and linked successfully!');
