const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    // Kitap Bilgileri
    title: {
        type: String,
        required: [true, "Başlık boş bırakılamaz"],
    },
    author: {
        type: String,
        required: [true, "Yazar boş bırakılamaz"],
    },
    description: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: [true, "Kategori boş bırakılamaz"],
    },
    language: {
        type: String,
        required: [true, "Dil boş bırakılamaz"],
    },

    // Yayın Bilgileri
    publicationDate: {
        type: Date,
        required: [true, "Basım tarihi boş bırakılamaz"]
    },
    edition: {
        type: Number,
        required: [true, "Baskı boş bırakılamaz"],
        min: [1, "Baskı numarası en az 1 olabilir"],
    },
    placeOfPublication: {
        type: String,
        required: [true, "Basım yeri boş bırakılamaz"],
    },

    // Fiziksel Özellikler
    width: {
        type: Number,
        required: [true, "Genişlik boş bırakılamaz"],
        min: [1, "Genişlik en az 1 olabilir"]
    },
    height: {
        type: Number,
        required: [true, "Yükseklik boş bırakılamaz"],
        min: [1, "Yükseklik en az 1 olabilir"]
    },
    pageCount: {
        type: Number,
        required: [true, "Sayfa sayısı boş bırakılamaz"],
        min: [1, "Sayfa sayısı en az 1 olabilir"],
    },
    coverType: {
        type: String,
        required: [true, "Kapak türü boş bırakılamaz"],
    },
    paperType: {
        type: String,
        required: [true, "Kağıt türü boş bırakılamaz"],
    },

    // Stok ve Fiyatlandırma
    barcode: {
        type: String,
        required: [true, "Barkod boş bırakılamaz"],
        unique: true,
    },
    stock: {
        type: Number,
        required: [true, "Stok miktarı boş bırakılamaz"],
        min: [0, "Stok miktarı en az 0 olabilir"],
    },
    price: {
        type: Number,
        required: [true, "Fiyat boş bırakılamaz"],
        min: [0, "Fiyat en az 0 olabilir"],
    },

    // Diğer Bilgiler
    image: {
        type: String,
        required: false,
    },

}, {
    timestamps: true
});


module.exports = mongoose.model('Book', bookSchema);


