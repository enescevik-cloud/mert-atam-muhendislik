# GitHub güncellemesi — V13

Bu ZIP mevcut projenin kaynak dosyalarını güncellemek içindir. ZIP'in kökünde `package.json`, `src`, `public` ve `scripts` bulunur. ZIP dosyasının kendisini veya ek bir üst klasörü depoya yüklemeyin.

V13; hero bileşenini ayırır, kaydırmada tekrarlanan DOM işlemlerini ve fotoğraflardaki çift animasyonu azaltır. Navbar geçişi opaklık üzerinden çalışır. Piksel değerleri korunan WebP logolar toplam 121.212 bayt daha küçüktür. Mevcut tasarım, fotoğraflar, açılış videosu ve içerik korunur.

## GitHub Desktop veya yerel Git ile

1. ZIP'i açın ve dosyaları mevcut deponun bilgisayarınızdaki klasörüne aktarın. Eski dosyaların üzerine yazın; deponun `.git` klasörünü koruyun.
2. Önceki sürümde varsa `src/pages/GalleryPage.jsx` ve `src/pages/gallery.css` dosyalarını kaldırın. Galeri bu sürümde yoktur.
3. Node.js 24 kullanın. Proje klasöründe CMD açarak üretim derlemesini yerelde kontrol edin:

```cmd
npm ci && npm run build && npm run preview
```

Terminalde gösterilen adresi açın. Varsayılan adres `http://localhost:4173` olur; port doluysa terminal farklı bir adres gösterebilir. Önizlemeyi kapatmak için CMD'de `Ctrl+C` kullanın.

4. GitHub Desktop'ta değişiklikleri inceleyip commit ve push yapın. Commit açıklaması: `V13: kaydırma, navbar ve medya performansını iyileştir`.

Geliştirme sırasında değişiklikleri anında görmek için, bağımlılıklar kurulduktan sonra:

```cmd
npm run dev
```

`scripts/prepare-photo-meta.mjs`, fotoğraf boyut bilgilerini `dev` ve `build` öncesinde otomatik hazırlar. Ek bağımlılık gerektirmez. `scripts` klasörünü de depoya aktardığınızdan emin olun.

## GitHub web sitesiyle yükleme

Bu web yükleme paketindeki iki grubu sırayla yükleyin. Her işlemde deponun `public` ve `src` klasörlerini gördüğünüz ana sayfasından başlayın.

1. **Add file → Upload files** seçin. Bilgisayarınızdaki `01-FOTOGRAFLAR` klasörünü açıp içindeki **public** klasörünü sürükleyin. 91 dosya `public/images/...` yolunda görünür. **Commit changes** ile kaydedin.
2. Depo ana sayfasına dönün ve yeniden **Add file → Upload files** seçin. Bilgisayarınızdaki `02-SITE-DOSYALARI` klasörünün **içindeki tüm klasör ve dosyaları** sürükleyin. 81 dosya yüklenir. `src`, `public`, `scripts`, `docs`, `licenses` ve kök dosyaları birlikte seçilmelidir; `.gitignore` ve `.nvmrc` dahildir. **Commit changes** ile kaydedin.

ZIP'i veya `01-FOTOGRAFLAR` / `02-SITE-DOSYALARI` dış klasörlerini depoya yüklemeyin. İkinci grubu yüklerken GitHub'da `public` klasörünün içine girmeyin; her iki işlem depo ana dizininden yapılır.

GitHub web arayüzü bir seferde en fazla 100 dosya kabul ettiği için paket 91 + 81 dosyaya ayrılmıştır. Yeni kod ve gerekli yardımcı dosyalar ikinci grupta birlikte bulunur.

Önceki sürümden kalan `src/pages/GalleryPage.jsx` ve `src/pages/gallery.css` dosyaları varsa ayrıca silinebilir. Dosya yükleme işlemi eski dosyaları kendiliğinden silmez. Yükleme grupları tamamlanana kadar bağlı Netlify sitesinde ara derlemeler görülebilir.

Resmî kaynak: [GitHub — Adding a file to a repository](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).

## Netlify yapılandırması

- Build command: `npm run build`
- Publish directory: `dist`
- Node: `24`

`netlify.toml` ve alt sayfa yönlendirmesi hazırdır. `dist` derleme sırasında oluşur. `node_modules` ve `dist` GitHub ZIP'ine eklenmemiştir. Genel medya dosyaları kısa süre, içerik özeti taşıyan derleme dosyaları uzun süre `immutable` olarak önbelleklenir. Yayın sonrası eski içerik görünüyorsa sunucu/CDN önbelleğini temizleyin.

Bu paket yüklemeye hazırdır; depo üzerinde otomatik commit veya push yapılmamıştır.
