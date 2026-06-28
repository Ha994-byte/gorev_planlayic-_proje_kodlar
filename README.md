# 📋 Kişisel Görev Yöneticisi (Task Manager)

Bu proje, kullanıcıların günlük görevlerini ekleyebileceği, tamamlanma durumlarını takip edebileceği ve kategorilere göre filtreleyebileceği full-stack bir web uygulamasıdır. 

Proje; backend tarafında **Java Spring Boot**, frontend tarafında **React** ve veritabanı olarak **PostgreSQL** kullanılarak geliştirilmiştir.

---

## 🚀 Teknolojik Altyapı

### Backend
* **Dil / Framework:** Java 17 / Spring Boot 3.2.5
* **Veritabanı Erişimi:** Spring Data JPA / Hibernate
* **REST API:** Spring Web (JSON formatında veri iletişimi)
* **Veritabanı:** PostgreSQL

### Frontend
* **Kütüphane:** React (Single Page Application - SPA)
* **Tasarım / Stil:** Vanilla CSS3 (Responsive ve modern arayüz)
* **Veri İletişimi:** Native Fetch API

---

## 🌟 Öne Çıkan Özellikler

* **Tam CRUD Operasyonları:** Görev ekleme, listeleme, tamamlama durumunu güncelleme ve silme işlemleri.
* **Dinamik Filtreleme:** Görevleri "İş", "Kişisel", "Eğitim" ve "Diğer" kategorilerine göre arayüzde anlık olarak filtreleme.
* **Güvenli Konfigürasyon:** Veritabanı şifresi gibi hassas bilgilerin kodda açıkça görünmemesi için Çevre Değişkenleri (Environment Variables) kullanımı.
* **CORS Desteği:** React arayüzünün backend API'sine sorunsuz istek atabilmesi için Cross-Origin Resource Sharing yapılandırması.
* **Responsive Tasarım:** Hem mobil cihazlarda hem de masaüstü ekranlarında uyumlu çalışan kullanıcı arayüzü.

---

## 🛠️ Kurulum ve Çalıştırma

### 1. Veritabanı Hazırlığı
1. PostgreSQL sunucunuzda **`task_manager`** adında boş bir veritabanı oluşturun.
2. Spring Boot, JPA/Hibernate sayesinde tabloları veritabanında otomatik olarak oluşturacaktır. Ekstra bir SQL kodu çalıştırmanıza gerek yoktur.

### 2. Backend Çalıştırma (Spring Boot)
1. `/task-manager-backend` projesini **IntelliJ IDEA** ile açın.
2. Maven bağımlılıklarının yüklenmesini bekleyin.
3. Uygulamanın veritabanına bağlanabilmesi için IntelliJ Run Configuration ekranındaki **Environment Variables (Çevre Değişkenleri)** alanına veritabanı şifrenizi ekleyin:
   ```env
   DB_PASSWORD=your_postgresql_password
   ```
4. `TaskManagerApplication.java` dosyasını çalıştırın. Backend API `http://localhost:8080` portunda çalışmaya başlayacaktır.

### 3. Frontend Çalıştırma (React)
1. `/task-manager-frontend` projesini **VS Code** ile açın.
2. Terminali açarak gerekli paketleri indirmek için şu komutu çalıştırın:
   ```bash
   npm install
   ```
3. Kurulum tamamlandıktan sonra uygulamayı başlatmak için şu komutu çalıştırın:
   ```bash
   npm start
   ```
4. Uygulama otomatik olarak tarayıcınızda `http://localhost:3000` adresinde açılacaktır.

---

## 📁 Proje Klasör Yapısı

```text
├── task-manager-backend/       # Spring Boot projesi (API)
│   ├── src/main/java/          # Java kodları (Entity, Repository, Controller)
│   └── src/main/resources/     # Konfigürasyon dosyaları (application.properties)
├── task-manager-frontend/      # React projesi (Kullanıcı Arayüzü)
│   ├── public/                 # HTML şablonu
│   └── src/                    # React componentleri ve CSS stilleri
└── README.md                   # Proje açıklama belgesi
```
