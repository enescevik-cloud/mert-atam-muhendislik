// Content evidence: source-v10/internship-layout.txt.
// sourcePages use the page numbers printed in the report, not PDF viewer indexes.
// referenceDays identify the corresponding daily entries. These fields are for source auditing.
export const serviceStories = {
  'elektrik-proje': {
    heading: 'Şemadaki devre,',
    italic: 'sahadaki karşılığı.',
    intro: 'Tek hat şeması, pano yerleşimi ve devre kayıtları birlikte ele alınır. AutoCAD çizimlerinde bağlantıların ve cihaz bilgilerinin açık biçimde izlenebilmesi esas alınır.',
    areas: [
      {
        id: 'autocad-tek-hat', number: '01', title: 'AutoCAD ve tek hat şeması',
        image: 'v10-project-drafting', alt: 'Elektrik çizimleri açık olan mühendislik çalışma istasyonu',
        text: 'Besleme ve çıkış devreleri ortak bir dağıtım düzeni altında gösterilir. Devre adları, koruma cihazları ve kablo açıklamaları birlikte işlenerek çizimin sahada takip edilmesi kolaylaştırılır.',
        items: ['Besleme ve çıkış devrelerinin gösterimi', 'Devre adları ve kablo açıklamaları', 'Tutarlı katman, yazı ve çizgi düzeni'],
        sourcePages: [6], referenceDays: [2],
      },
      {
        id: 'pano-proje-eslestirme', number: '02', title: 'Pano ile projenin eşleşmesi',
        image: 'report-singleline', alt: 'Elektrik devre ve pano yerleşimi paftalarının bulunduğu çalışma masası',
        text: 'Tek hat şemasındaki devreler aynı paftadaki pano yerleşimiyle birlikte kontrol edilir. Pano etiketleri ve çizim referanslarının tutarlılığı, bağlantının sahada bulunmasını ve izlenmesini destekler.',
        items: ['Tek hat ve pano yerleşiminin karşılaştırılması', 'Pano etiketleri ve çizim referansları', 'Aydınlatma ve perde çıkışlarının tanımlanması'],
        sourcePages: [6, 16], referenceDays: [2, 3, 12],
      },
      {
        id: 'koruma-ve-kablo-bilgileri', number: '03', title: 'Koruma ve kablo bilgileri',
        image: 'taahhut-switchboard', alt: 'Koruma cihazları ve kablo bağlantıları bulunan dağıtım panosu',
        text: 'Koruma cihazının anma akımı ile kısa devre kesme kapasitesi ayrı özellikler olarak değerlendirilir. Kablo seçimi; akım taşıma kapasitesi, döşeme koşulları, gerilim düşümü ve kısa devre koşullarıyla birlikte ele alınır.',
        items: ['Anma akımı ve kesme kapasitesi ayrımı', 'Akım taşıma ve döşeme koşulları', 'Gerilim düşümü ve kısa devre koşulları'],
        sourcePages: [6], referenceDays: [3],
      },
      {
        id: 'cizim-ve-saha-kayitlari', number: '04', title: 'Çizim ve saha kayıtları',
        image: 'v10-panel-labels', alt: 'Çizim referanslarıyla eşleştirilen elektrik panosu kablo ve devre etiketleri',
        text: 'Ofis çizimleri ile saha bilgileri birlikte tutulur. Devre adlarının, bağlantı noktalarının ve pano işaretlerinin aynı kayıtlarla eşleşmesi; uygulama ve sonraki kontrollerde ilgili devrenin bulunmasını kolaylaştırır.',
        items: ['Çizim ve kurulum bilgilerinin birlikte tutulması', 'Devre adları ve bağlantıların izlenmesi', 'Pano işaretlerinin proje kayıtlarıyla eşleştirilmesi'],
        sourcePages: [5, 6], referenceDays: [1, 2, 3],
      },
    ],
  },
  'elektrik-taahhut': {
    heading: 'Yerleşimden bağlantıya,',
    italic: 'düzenli bir uygulama.',
    intro: 'Dağıtım panoları, güç kabloları ve büyük elektrik ekipmanlarının yerleşimi birlikte değerlendirilir. Malzeme, taşıma ve saha koordinasyonu elektrik bağlantılarından önce planlanır.',
    areas: [
      {
        id: 'dagitim-panosu-duzeni', number: '01', title: 'Dağıtım panosu düzeni',
        image: 'report-distribution-panel', alt: 'Dağıtım cihazları ve kablo bağlantıları bulunan elektrik panosu',
        text: 'Dağıtım, koruma, anahtarlama ve kontrol bileşenleri işlevlerine göre ele alınır. Cihaz ve kablo etiketlerinin çizimle eşleşmesi, pano içindeki bağlantıların takip edilmesini ve erişimi kolaylaştırır.',
        items: ['Dağıtım ve kompanzasyon bölümleri', 'Cihaz, kablo ve devre etiketleri', 'Bağlantılara erişim ve pano yerleşimi'],
        sourcePages: [16], referenceDays: [12],
      },
      {
        id: 'jenerator-yerlesimi', number: '02', title: 'Jeneratör ve yerleşim planı',
        image: 'v10-generator', alt: 'Sahada yerleşim ve erişim koşullarıyla birlikte ele alınan jeneratör',
        text: 'Jeneratörün sahaya taşınması ve kurulum yerine alınması ayrı bir uygulama aşaması olarak planlanır. Yerleşimde ekipman ölçülerinin yanında taşıma yolu, havalandırma, egzoz ve bakım erişimi değerlendirilir.',
        items: ['Taşıma ve kaldırma erişimi', 'Havalandırma, egzoz ve bakım alanı', 'Şebeke ve yedek besleme arasındaki aktarım düzeni'],
        sourcePages: [15], referenceDays: [11],
      },
      {
        id: 'guc-kablosu-hazirligi', number: '03', title: 'Güç kablosu hazırlığı',
        image: 'taahhut-cable-pulling', alt: 'Güç kablosu makarası ve kablo taşıma hazırlığı yapılan saha',
        text: 'Kablo makaraları, malzeme kayıtları ve güzergâh bilgileri uygulama öncesinde eşleştirilir. Kablo dış kılıfının korunması ile bükülme ve çekme koşulları, taşıma ve döşeme planının parçası olarak ele alınır.',
        items: ['Makara ve malzeme bilgilerinin eşleştirilmesi', 'Dış kılıfın taşıma sırasında korunması', 'Güzergâh, bükülme ve çekme koşullarının incelenmesi'],
        sourcePages: [8], referenceDays: [4],
      },
      {
        id: 'saha-montaj-koordinasyonu', number: '04', title: 'Saha ve montaj koordinasyonu',
        image: 'v10-panel-installation', alt: 'Elektrik ekipmanlarının montaj ve bağlantı düzeniyle birlikte yerleştirildiği pano alanı',
        text: 'Direk ve jeneratör gibi büyük ekipmanların taşınması, yerleştirilmesi ve desteklenmesi elektrik işleriyle birlikte koordine edilir. Erişim ve çevredeki diğer çalışmalar, montaj planında birlikte değerlendirilir.',
        items: ['Taşıma ve yerleştirme sırasının planlanması', 'Montaj alanı ve erişim düzeni', 'Mekanik yerleşim ile elektrik bağlantılarının koordinasyonu'],
        sourcePages: [11, 15], referenceDays: [7, 11],
      },
    ],
  },
  'enerji-baglanti-hatlari': {
    heading: 'Güzergâhı tanımlanan hat,',
    italic: 'izlenebilir bağlantılar.',
    intro: 'Yeraltı güç kabloları, ek noktaları, direkler ve trafo bağlantıları birlikte incelenir. Malzeme, güzergâh ve bağlantı kayıtlarının birbiriyle uyumlu olması gözetilir.',
    areas: [
      {
        id: 'kablo-ve-guzergah', number: '01', title: 'Kablo ve güzergâh hazırlığı',
        image: 'cables', alt: 'Yeraltı güç kablosu güzergâhı yanında kablo makaraları',
        text: 'Güzergâhın başlangıç ve bitiş noktaları, geçişleri, diğer altyapılar ve çalışma alanına erişim birlikte değerlendirilir. Makara bilgileri, proje ve malzeme kayıtlarıyla kontrol edilir.',
        items: ['Başlangıç, bitiş ve geçiş noktaları', 'Diğer altyapılar ve saha erişimi', 'Makara, proje ve malzeme kayıtları'],
        sourcePages: [8], referenceDays: [4],
      },
      {
        id: 'yeralti-kablo-ekleri', number: '02', title: 'Yeraltı kablo ekleri',
        image: 'report-cable-joints', alt: 'Yeraltı güç kablosu güzergâhı ve bağlantı alanı',
        text: 'Kablo ek düzeninde elektriksel süreklilik, yalıtım ve çevresel koruma birlikte ele alınır. Devreler açık biçimde tanımlanır; ek yerlerinin konumu güzergâh kapatılmadan önce kayıt altına alınır.',
        items: ['Kablo yapısına uygun ek düzeni', 'Devre ve iletken tanımlarının takibi', 'Ek konumları ve bağlantı kayıtları'],
        sourcePages: [9], referenceDays: [5],
      },
      {
        id: 'yataklama-ve-uyari-bandi', number: '03', title: 'Yataklama ve uyarı bandı',
        image: 'v10-cable-bedding', alt: 'Yeraltı güç kablolarının yataklandığı hazırlanmış kablo kanalı',
        text: 'Kablo çevresindeki dolgu ve yataklama malzemesi, dış kılıfın korunması açısından değerlendirilir. Dolgu aşamaları, ölçüm referansı ve güzergâh boyunca kullanılan uyarı bandı saha kayıtlarıyla birlikte takip edilir.',
        items: ['Kablo çevresindeki yataklama malzemesi', 'Aşamalı dolgu ve ölçüm referansı', 'Uyarı bandı ve güzergâh işaretlemesi'],
        sourcePages: [10], referenceDays: [6],
      },
      {
        id: 'direk-ayirici-trafo', number: '04', title: 'Direk, ayırıcı ve trafo',
        image: 'report-disconnector', alt: 'OG ayırıcının üç faz izolatör ve iletken bağlantı düzeni',
        text: 'Direk, izolatör, ayırıcı ve dağıtım trafosu; destek yapıları ve iletken bağlantılarıyla birlikte incelenir. Havai hattan trafoya ve alçak gerilim tarafına uzanan bağlantı düzeni takip edilir.',
        items: ['Direk ve ekipman destek düzeni', 'OG ayırıcının izolatör ve bağlantı bileşenleri', 'Trafo gövdesi, kablo ve havai hat bağlantıları'],
        sourcePages: [11, 12, 13, 14], referenceDays: [7, 8, 9, 10],
      },
    ],
  },
  'elektrik-muhendislik': {
    heading: 'Cihazdan devre kaydına,',
    italic: 'ölçümle yapılan kontrol.',
    intro: 'Kompanzasyon bileşenleri, reaktif güç kontrolörü ve tesisat test cihazı birlikte değerlendirilir. Ölçümün türü, bağlantı noktası ve ilgili devre bilgisi aynı kayıtta tutulur.',
    areas: [
      {
        id: 'kompanzasyon-panosu', number: '01', title: 'Kompanzasyon bileşenleri',
        image: 'operations-compensation', alt: 'Kompanzasyon panosunda kondansatör grupları ve bağlantılar',
        text: 'Dağıtım ve kompanzasyon bölümlerinin pano içindeki düzeni birlikte incelenir. Kondansatörler ve ilgili bağlantılar, koruma, anahtarlama ve kontrol işlevlerinden ayrılarak takip edilir.',
        items: ['Kondansatör ve ilgili bağlantılar', 'Dağıtım ile kompanzasyon bölümlerinin ayrımı', 'Pano etiketlerinin çizimle eşleştirilmesi'],
        sourcePages: [16], referenceDays: [12],
      },
      {
        id: 'reaktif-guc-kontroloru', number: '02', title: 'Reaktif güç kontrolörü',
        image: 'v10-reactive-controller', alt: 'Reaktif güç kontrolöründe ölçüm bilgileri ve kondansatör kademe göstergeleri',
        text: 'Kontrolörün ölçüm bilgileri ile kondansatör kademe göstergeleri ayrı olarak okunur. Faz bilgileri, ekrandaki birim ve menü ile birlikte değerlendirilir; yük değişimine bağlı kademe düzeni takip edilir.',
        items: ['Ölçüm bilgileri ve faz göstergeleri', 'Kondansatör kademe durumları', 'Ekran değeri, birim ve menünün birlikte okunması'],
        sourcePages: [17], referenceDays: [13],
      },
      {
        id: 'tesisat-direnc-olcumu', number: '03', title: 'Tesisat ölçümü ve direnç',
        image: 'report-test-resistance', alt: 'Tesisat test cihazında direnç ölçüm kaydı',
        text: 'Tesisat test cihazının bağlantı düzeni, yapılacak ölçüme göre hazırlanır. Direnç göstergesi, seçilen test modu ve ölçüm noktasıyla birlikte değerlendirilerek ilgili devre bilgisiyle kaydedilir.',
        items: ['Ölçüme uygun test modu ve bağlantı', 'Direnç değerinin test noktasıyla değerlendirilmesi', 'Sonucun ilgili devreyle kaydedilmesi'],
        sourcePages: [18], referenceDays: [14],
      },
      {
        id: 'dongu-empedansi-kaydi', number: '04', title: 'Çevrim empedansı ve akım kaydı',
        image: 'report-test-loop', alt: 'Tesisat test cihazında çevrim empedansı ve hesaplanan kısa devre akımı kaydı',
        text: 'Çevrim empedansından hesaplanan beklenen kısa devre akımı, normal çalışma yük akımından ayrı değerlendirilir. Sonucun yorumlanabilmesi için test modu, ölçüm noktası ve devre bilgisi birlikte kaydedilir.',
        items: ['Çevrim empedansı ölçüm kaydı', 'Beklenen kısa devre akımının değerlendirilmesi', 'Test modu, nokta ve devre bilgisinin eşleştirilmesi'],
        sourcePages: [18], referenceDays: [14],
      },
    ],
  },
};
