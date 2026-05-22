import elektrikProjelendirmeHero from "../assets/services/elektrik-projelendirme/hero.jpg";
import agSistemleriHero from "../assets/services/ag-sistemleri/hero.jpg";
import ogSistemleriHero from "../assets/services/og-sistemleri/hero.jpg";
import trafoProjeleriHero from "../assets/services/trafo-projeleri/hero.jpg";
import enerjiNakilHatlariHero from "../assets/services/enerji-nakil-hatlari/hero.jpg";
import kesifMetrajHero from "../assets/services/kesif-metraj/hero.jpg";
import akilliEvOtomasyonHero from "../assets/services/akilli-ev-otomasyon/hero.jpg";

import servicesMainHero from "../assets/services/hero.jpg";

export const servicesHero = servicesMainHero;

export const services = [
  {
    id: 1,
    slug: "elektrik-projelendirme",
    title: "Elektrik Projelendirme",
    shortText:
      "Yapıların elektrik altyapısını güvenli, verimli ve uygulanabilir şekilde projelendiriyoruz.",
    hero: elektrikProjelendirmeHero,
    eyebrow: "Projelendirme",
    description:
      "Elektrik projelendirme hizmetimiz; yapıların kullanım amacı, enerji ihtiyacı, güvenlik gereklilikleri ve yönetmelik şartları dikkate alınarak hazırlanır. Proje sürecinde teknik doğruluk, uygulanabilirlik ve uzun vadeli sistem performansı esas alınır.",
    details: [
      "Kuvvetli akım ve zayıf akım proje altyapısının oluşturulması",
      "Pano, hat, kablo ve koruma elemanlarının teknik olarak planlanması",
      "Yönetmeliklere ve saha uygulamasına uygun proje hazırlanması",
      "Uygulama ekipleri için anlaşılır ve sürdürülebilir çizim sistemi",
    ],
    processTitle:
      "Elektrik projelerinde güvenli, düzenli ve uygulanabilir altyapı yaklaşımı.",
    processText:
      "Her proje; teknik gereklilikler, saha koşulları, kullanıcı ihtiyaçları ve sürdürülebilir işletme hedefleri birlikte değerlendirilerek hazırlanır.",
  },
  {
    id: 2,
    slug: "ag-sistemleri",
    title: "AG Sistemleri",
    shortText:
      "Alçak gerilim sistemlerinde güvenli dağıtım, doğru koruma ve sürdürülebilir enerji altyapısı.",
    hero: agSistemleriHero,
    eyebrow: "Alçak Gerilim",
    description:
      "AG sistemleri, yapıların günlük enerji kullanımında kritik rol oynar. Mert Atam Mühendislik olarak AG dağıtım altyapılarını güvenlik, süreklilik ve enerji verimliliği kriterleri doğrultusunda ele alıyoruz.",
    details: [
      "AG dağıtım panoları ve hat planlaması",
      "Yük analizleri ve koruma koordinasyonu",
      "Kablo kesiti, gerilim düşümü ve enerji sürekliliği değerlendirmesi",
      "Saha uygulamasına uygun teknik çözüm geliştirme",
    ],
    processTitle:
      "Alçak gerilim sistemlerinde güvenilir dağıtım ve koruma kurgusu.",
    processText:
      "Enerji dağıtımı; yük dengesi, güvenlik, pano yapısı, kablo güzergâhı ve koruma elemanları birlikte değerlendirilerek planlanır.",
  },
  {
    id: 3,
    slug: "og-sistemleri",
    title: "OG Sistemleri",
    shortText:
      "Orta gerilim altyapılarında güvenilir, kontrollü ve profesyonel mühendislik çözümleri.",
    hero: ogSistemleriHero,
    eyebrow: "Orta Gerilim",
    description:
      "OG sistemleri yüksek güvenlik ve teknik hassasiyet gerektirir. Orta gerilim enerji altyapılarını doğru ekipman seçimi, koruma mantığı ve sürdürülebilir işletme yaklaşımıyla değerlendiriyoruz.",
    details: [
      "OG hücre, trafo ve enerji giriş altyapısı değerlendirmesi",
      "Koruma, güvenlik ve işletme sürekliliği odaklı planlama",
      "Enerji dağıtım senaryolarının teknik analizi",
      "Yönetmeliklere uygun mühendislik yaklaşımı",
    ],
    processTitle:
      "Orta gerilim altyapılarında kontrollü ve güvenli sistem yaklaşımı.",
    processText:
      "OG sistemleri; enerji sürekliliği, işletme güvenliği, koruma koordinasyonu ve teknik standartlar dikkate alınarak ele alınır.",
  },
  {
    id: 4,
    slug: "trafo-projeleri",
    title: "Trafo Projeleri",
    shortText:
      "Trafo merkezleri için doğru kapasite, güvenli yerleşim ve uygulanabilir proje yaklaşımı.",
    hero: trafoProjeleriHero,
    eyebrow: "Trafo Sistemleri",
    description:
      "Trafo projeleri, enerji altyapısının kritik noktalarından biridir. Kapasite seçimi, yerleşim, güvenlik, bakım erişimi ve işletme sürekliliği birlikte değerlendirilerek projelendirme yapılır.",
    details: [
      "Trafo gücü ve yük ihtiyacının değerlendirilmesi",
      "Trafo merkezi yerleşim ve bağlantı yaklaşımı",
      "AG/OG entegrasyonu ve pano bağlantılarının planlanması",
      "Güvenli işletme ve bakım erişimi odaklı proje hazırlığı",
    ],
    processTitle:
      "Trafo merkezlerinde kapasite, güvenlik ve sürdürülebilir işletme dengesi.",
    processText:
      "Trafo projelerinde doğru kapasite seçimi, erişilebilir yerleşim, koruma düzeni ve enerji sürekliliği birlikte değerlendirilir.",
  },
  {
    id: 5,
    slug: "enerji-nakil-hatlari",
    title: "Enerji Nakil Hatları",
    shortText:
      "Enerji iletim ve dağıtım süreçlerinde doğru güzergâh, güvenli hat ve sürdürülebilir altyapı.",
    hero: enerjiNakilHatlariHero,
    eyebrow: "Enerji Altyapısı",
    description:
      "Enerji nakil hatları; tesislerin enerji sürekliliği, güvenliği ve dağıtım performansı açısından büyük önem taşır. Hat planlaması yapılırken güzergâh, mesafe, yük, güvenlik ve bakım koşulları birlikte ele alınır.",
    details: [
      "Enerji iletim ve dağıtım güzergâhlarının değerlendirilmesi",
      "Hat kapasitesi ve teknik uygunluk analizi",
      "Saha koşullarına göre uygulanabilir çözüm geliştirme",
      "Uzun vadeli işletme güvenliği odaklı planlama",
    ],
    processTitle:
      "Enerji nakil hatlarında güvenilir güzergâh ve sürdürülebilir iletim yaklaşımı.",
    processText:
      "Hat planlamasında güzergâh, yük yapısı, mesafe, bakım erişimi ve işletme sürekliliği birlikte değerlendirilir.",
  },
  {
    id: 6,
    slug: "kesif-metraj",
    title: "Keşif & Metraj",
    shortText:
      "Proje maliyetlerinin doğru analiz edilmesi için detaylı keşif ve metraj çalışmaları.",
    hero: kesifMetrajHero,
    eyebrow: "Maliyet Analizi",
    description:
      "Keşif ve metraj çalışmaları, projenin bütçe ve uygulama planlamasında temel rol oynar. Malzeme miktarları, iş kalemleri ve teknik gereklilikler detaylı şekilde değerlendirilir.",
    details: [
      "Proje üzerinden malzeme ve iş kalemi çıkarımı",
      "Elektrik tesisatı metraj çalışmalarının hazırlanması",
      "Yaklaşık maliyet ve uygulama planlamasına destek",
      "Teknik şartlara uygun keşif listesi oluşturma",
    ],
    processTitle:
      "Keşif ve metraj süreçlerinde doğru maliyet ve doğru planlama yaklaşımı.",
    processText:
      "Proje kapsamı; malzeme miktarı, işçilik kalemi, teknik gereklilik ve uygulama senaryoları üzerinden detaylı analiz edilir.",
  },
  {
    id: 7,
    slug: "akilli-ev-otomasyon",
    title: "Akıllı Ev Otomasyon",
    shortText:
      "Konut ve ticari yapılarda konfor, güvenlik ve enerji verimliliğini artıran otomasyon çözümleri.",
    hero: akilliEvOtomasyonHero,
    eyebrow: "Otomasyon",
    description:
      "Akıllı ev otomasyon sistemleri; aydınlatma, güvenlik, iklimlendirme ve enerji kontrolünü daha verimli ve kullanıcı dostu hale getirir. Projelendirme sürecinde yapının kullanım senaryosu ve teknik altyapısı birlikte değerlendirilir.",
    details: [
      "Aydınlatma ve senaryo kontrol altyapısı",
      "Güvenlik, kamera ve erişim sistemleriyle entegrasyon",
      "Enerji verimliliği odaklı otomasyon yaklaşımı",
      "Kullanıcı ihtiyaçlarına göre ölçeklenebilir sistem tasarımı",
    ],
    processTitle:
      "Akıllı otomasyon sistemlerinde konfor, güvenlik ve enerji kontrolü.",
    processText:
      "Otomasyon çözümleri; kullanıcı alışkanlıkları, yapı fonksiyonu, enerji verimliliği ve teknik altyapı birlikte düşünülerek tasarlanır.",
  },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}