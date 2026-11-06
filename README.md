# Mert Atam Mühendislik

Elektrik proje, elektrik taahhüt, enerji bağlantı hatları, KNX/DALI otomasyonu, elektrik ölçümleri ve kompanzasyon için kurumsal web sitesi. Bu paket GitHub'a yüklenmeye hazır kaynak dosyaları içerir.

## V13 — performans düzenlemesi

Ana sayfadaki elektrik fotoğrafları, açılış videosu, iki hero fotoğrafı, alt sayfalar, vizyon/misyon düzeni ve şeffaf → beyaz → yeşil navbar korunur. Galeri kaldırılmış olarak kalır. Bu sürüm, kaydırma sırasında tekrarlanan işlemleri ve büyük fotoğraflardaki üst üste animasyonları azaltır; tasarım ve içerik değiştirilmez.

Teknik kapsam kullanıcı tarafından sağlanan belgeye dayanır; yeni hizmet iddiası eklenmez. Görsel kaynakları `docs/PHOTO-SOURCES.md` ve `public/images/credits.json` içinde açıklanır. Mevcut iletişim bilgileri ve 16 referans korunur.

## Yerelde çalıştırma

Node.js 24 kullanın. ZIP'i açtıktan sonra `package.json` bulunan klasörde CMD açın:

```cmd
npm ci && npm run build && npm run preview
```

Terminalde gösterilen adresi açın. Varsayılan adres `http://localhost:4173` olur; port doluysa terminal farklı bir adres gösterebilir. Bu komut, yayınlanacak üretim derlemesini yerelde görüntüler.

Geliştirme sırasında dosya değişikliklerini anında görmek için, bağımlılıklar kurulduktan sonra:

```cmd
npm run dev
```

Fotoğraf boyut bilgileri, `scripts/prepare-photo-meta.mjs` ile `dev` ve `build` öncesinde otomatik hazırlanır. Bu işlem Node.js'in yerleşik modüllerini kullanır; ayrıca paket kurmanız veya komut çalıştırmanız gerekmez.

## GitHub ve Netlify

ZIP'in içindeki `package.json`, `src`, `public`, `scripts` ve diğer proje dosyalarını mevcut GitHub deposunun ana dizinine aktarın. ZIP dosyasını veya ek bir üst klasörü yüklemeyin. Ayrıntılı adımlar `GITHUB-GUNCELLEME.md` dosyasındadır.

Netlify ayarları:

- Build command: `npm run build`
- Publish directory: `dist`
- Node: `24`

`netlify.toml` ve alt sayfa yönlendirmesi hazırdır. `dist`, derleme sırasında oluştuğu için GitHub paketine eklenmez. `node_modules` ve yerel ortam dosyaları da pakete dahil değildir. Varsa eski `src/pages/GalleryPage.jsx` ve `src/pages/gallery.css` dosyalarını depodan kaldırın.

## Medya ve performans

Fotoğraflar responsive WebP olarak sunulur ve aşağıdaki içerikler lazy yüklenir. Küçük kaynak fotoğraflar büyütülmez. Orijinal açılış videosu 8 saniyedir; masaüstü yaklaşık 936 KB, mobil 326 KB. Video ekran dışında, sekme gizliyken veya menü açıkken durur. Hareket azaltma ve veri tasarrufu tercihinde poster kullanılır. Ağır yeni animasyon kütüphanesi eklenmemiştir.

V13'te yapılan performans değişiklikleri:

- Hero bileşeni ayrılmıştır; slayt değişimleri ana sayfanın tamamını yeniden render etmez.
- Görünürlük animasyonları ve sayfa içi bağlantılar, ilgili içerik değiştiğinde işlenir. Kaydırma boyunca aynı DOM taramaları tekrarlanmaz.
- Navbarın renk geçişi, her karede renk boyamak yerine sabit beyaz ve yeşil katmanların opaklığıyla yapılır.
- Fotoğraflardaki ikinci ölçek animasyonu kaldırılmıştır; bölüm giriş animasyonları korunur.
- Logoların piksel değerleri korunarak WebP'ye dönüştürülmesi toplam 121.212 bayt tasarruf sağlar.
- Küçük logolar JavaScript içine gömülmez; gerektiğinde ayrı görsel olarak yüklenir. İlk JavaScript gzip boyutu V12’ye göre %17,82 azalmıştır (105.218 → 86.467 bayt; gzip seviye 9). Bu değer FPS ölçümü değildir.
- Genel medya dosyaları kısa süre önbelleklenir. Dosya adında içerik özeti bulunan derleme dosyaları uzun süre `immutable` olarak önbelleklenir.

İletişim formu WhatsApp mesaj taslağı açar; son gönderim ziyaretçi tarafından tamamlanır. Arka planda kayıt veya e-posta sunucusu yoktur.

Font lisansları `licenses` klasöründedir. Güncelleme sonrası varsa sunucu/CDN önbelleğini temizleyin.
