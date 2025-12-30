## **Cihaz Özellikleri Uygulaması**

- Furkan Sadık Kocabaş
- 200404001
- Bilgisayar Mühendisliği (türkçe) 4. sınıf öğrencisi


Bu proje, React Native ve Expo kullanılarak geliştirilmiş basit bir cihaz özellikleri uygulamasıdır. Uygulama içerisinde kamera ile fotoğraf çekme, galeriden fotoğraf seçme, cihaz konumunu alma ve farklı titreşim örneklerini deneme işlevleri bulunmaktadır. Her özellik ayrı bir ekranda çalışmakta ve kullanıcı, uygulamanın ana ekranından bu özelliklere erişebilmektedir.

---

## Uygulama Özellikleri

- Kamera ekranı: Cihaz kamerasını kullanarak fotoğraf çekilebilir. Çekilen fotoğraf ekranda görüntülenir.
- Galeri ekranı: Cihaz galerisinden bir fotoğraf seçilebilir ve seçilen fotoğraf ekranda görüntülenir.
- Konum ekranı: Kullanıcı konum bilgisi alınmaya çalışılır. Konum bilgisi web’de test edildiğinde alınabilir, bazı Android cihazlarda servis kısıtlamaları nedeniyle konum bilgisi alınamayabilir. Uygulama bu durumu hata mesajı ile kullanıcıya bildirir.
- Titreşim ekranı: Cihazın titreşim desteği kullanılarak farklı titreşim tipleri denenir. Bu ekranda hem expo-haptics hem de Vibration API kullanılmıştır. Destekleyen cihazlarda titreşim hissedilir. Her işlemden sonra kullanıcıya bilgilendirme mesajı gösterilir.

---

Önemli Notlar

- Konum özelliği bazı Android cihazlarda Google servisleri eksik olduğunda çalışmayabilir. Bu durumda uygulama hata mesajı gösterir.
- Titreşim özelliği cihazın donanım ve ayarlarına bağlıdır. Cihazda titreşim kapalıysa, titreşim hissedilmeyebilir. Uygulama hem expo-haptics hem de Vibration kullanarak titreşimi tetikler, böylece destekleyen cihazlarda titreşim kesin olarak çalışır.
- Her ekranda işlem sonrası bilgilendirme mesajı gösterilerek kullanıcı geri bildirimi sağlanmıştır.

---

## Proje Yapısı

**App.js** → Navigasyon ve ekran yönlendirmeleri

**HomeScreen.js** → Ana ekran

**CameraScreen.js** → Kamera'dan fotoğraf çekme

**GalleryScreen.js** → Galeri'den fotoğraf seçme

**LocationScreen.js** → Konum alma (koordiant ile)

**HapticsScreen.js** → Titreşim örnekleri

---

## Kullanılan Teknolojiler:

- React Native
- Expo
- Expo Image Picker (kamera ve galeri kullanımı)
- Expo Location (konum bilgisi alma)
- Expo Haptics ve React Native Vibration (titreşim desteği)
- React Navigation (ekranlar arası geçiş)

---

## Sonuç

Bu uygulama, React Native ile cihaz donanım özelliklerinin temel kullanımlarını göstermektedir. Kamera, galeri, konum ve titreşim işlevleri ayrı ekranlarda uygulanmış ve kullanıcıya bilgilendirme mesajları ile geri bildirim verilmiştir. Uygulama ödev gereksinimlerini karşılamakta ve temel mobil uygulama geliştirme deneyimi sağlamaktadır.
