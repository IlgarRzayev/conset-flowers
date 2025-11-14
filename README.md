# Conset Flowers Website

Bu proje, modern frontend ve backend teknolojileri kullanılarak geliştirilmiş responsive bir çiçekçi websitesidir.

## Teknoloji

### Frontend
- **HTML**
- **CSS**
- **React** 
- **Bootstrap 5** 


### Backend  
- **PHP** 
- **PDO** 
- **RESTful API** 





## Kurulum

### Github'dan projeyi indirme:

Terminalden aşağıdaki kodu çalıştırın:
```bash
git clone https://github.com/IlgarRzayev/conset-flowers.git
cd conset-flowers
```

### A. Frontend Kurulumu: 

1. Proje klasörüne gidin

```bash
cd conset-flowers/frontend
```

2. Gerekli paketleri yükle

```bash 
npm install
```

3. Geliştirme sunucusunu başladın

```bash
npm run dev
```

4. Tarayıcıda açın

```bash
http://localhost:5173
```

### B. Backend Kurulumu:

1. XAMPP'ı kurun ve başladın
2. Apache ve MySQL'i çalıştırın
3. backend/ klasörünü kopyalayın: ```C:\xampp\htdocs\conset-backend\ ```


### C. Veritabanı Kurulumu:

1. Tarayıcıda açın: ```bash http://localhost/phpmyadmin ```
2. Yeni veritabanı oluşturun: ```bash conset_flowers```
3. SQL kodunu çalıştırın:
```bash 
    CREATE TABLE contact (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    message TEXT NOT NULL
);
```

##  Ekran Görüntüleri

###  Hero Bölümü
![Hero Section](/images/hero_section.png)

###  Ürünler Bölümü
![Products Section](/images/products_section.png)

###  Hakkımızda Bölümü
![About Section](/images/about_section.png)

###  İletişim Bölümü
![Contact Section](/images/contact_section.png)

##  Proje Yapısı
```bash
conset-flowers/
├── frontend/ 
│ ├── src/
│ │ ├── components/
│ │ │ ├── Navbar.jsx
│ │ │ ├── Hero.jsx
│ │ │ ├── Products.jsx
│ │ │ ├── About.jsx
│ │ │ └── Contact.jsx
│ │ ├── App.jsx
│ │ └── main.jsx
│ │ └── index.css 
│ ├── public/
│ └── package.json
├── backend/ 
│ ├── contact.php 
│ └── db.php 
└── README.md
```


## Canlı Demo 

https://conset-flowers.vercel.app

