# Kitap Dükkanı Projesi

Kitap Dükkanı Projesine hoş geldiniz! 
Bu, Node.js, Express ve Mongoose kullanarak web geliştirmenin heyecan verici dünyasına dalacağımız etkileşimli bir öğrenme projesidir. 
Yolculuğumuz burada bitmeyecek, çünkü kitapçımızı hayata geçirmek için React tabanlı bir ön uç entegre etmeyi planlıyoruz.

## Bu Proje Hakkında

Kitapçı Projesi, hevesli yazılım geliştiriciler için pratik bir öğrenme deneyimi olarak tasarlandı. 
Gerçek bir dünya kitapçısını modelleyen işlevsel bir web uygulaması inşa ediyoruz. Bu proje şunları kapsar:

- Node.js ve Express ile arka uç geliştirme
- Mongoose kullanarak veritabanı entegrasyonu
- React ile ön uç geliştirme (yakında)

## Başlarken

Bu talimatlar, projenin bir kopyasını yerel makinenizde geliştirme ve test amaçları için çalışır duruma getirecektir.

### Önkoşullar

Başlamadan önce, kurmanız gerekenler:

- Node.js
- npm (genellikle Node.js ile gelir)
- MongoDB

Ayrıca, bir MongoDB veritabanı kurmanız ve `MONGO_URI`nız ile proje kökünde bir `.env` dosyası oluşturmanız gerekecek.

### Kurulum

Geliştirme ortamınızı hazırlamak için bu adımları takip edin:

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/osmanpehlivanoglu/YazilimOgreniyorum.git
   ```
2. Proje dizinine gidin:
   ```bash
   cd YazilimOgreniyorum/backend
   ```
3. Gerekli paketleri yükleyin:
   ```bash
   npm install
   ```
4. Backend dizininin kökünde bir .env dosyası oluşturun. Aşağıdaki satırı ekleyin, <your_mongo_uri>'yi MongoDB bağlantı dizenizle değiştirin:
   ```bash
   MONGO_URI=<your_mongo_uri>
   ```
5. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```
6. Uygulama şimdi http://localhost:3000 adresinde çalışıyor olmalıdır. İsterseniz, seçilen portu değiştirmek için .env dosyasına bir PORT değişkeni ekleyebilirsiniz.

## Yazarlar

- **Osman Pehlivanoğlu** | [osmanpehlivanoglu](https://github.com/osmanpehlivanoglu)

## Lisans

Bu proje MIT Lisansı altında lisanslanmıştır



# Bookstore Project

Welcome to the Bookstore Project! 
This is an interactive learning project where we dive into the exciting world of web development using Node.js, Express, and Mongoose.
Our journey will not stop here, as we plan to integrate a React-based front end to bring our bookstore to life.

## About This Project

The Bookstore Project is designed as a hands-on learning experience for aspiring software developers. 
We're building a functional web application that models a real-world bookstore. This project covers:

- Backend development with Node.js and Express
- Database integration using Mongoose
- Frontend development (coming soon) with React

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before starting, you'll need to install:

- Node.js
- npm (usually comes with Node.js)
- MongoDB

Additionally, you'll need to set up a MongoDB database and create an `.env` file in the project root with your `MONGO_URI`.

### Installing

Follow these steps to get your development environment ready:

1. Clone the repository:
   ```bash
   git clone https://github.com/osmanpehlivanoglu/YazilimOgreniyorum.git
   ```
2. Navigate to the project directory:
   ```bash
   cd YazilimOgreniyorum/backend
   ```
3. Install the required packages:
   ```bash
   npm install
   ```
4. Create an .env file in the root of the backend directory. Add the following line, replacing <your_mongo_uri> with your MongoDB connection string:
   ```bash
   MONGO_URI=<your_mongo_uri>
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. The application should now be running on http://localhost:3000. If you prefer you can add a PORT variable to .env file to change the selected port.

## Yazarlar

- **Osman Pehlivanoğlu** | [osmanpehlivanoglu](https://github.com/osmanpehlivanoglu)

## License

This project is licensed under the MIT License
