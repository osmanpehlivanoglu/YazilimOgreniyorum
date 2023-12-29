const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    barcode: {
        type: String,
        required: [true, "Barkodu boş bırakmayınız."],
        unique: true,
    },
    title: {
        type: String,
        required: [true, "isim boş bırakılamaz"],
    },
    author: {
        type: String,
        required: [true, "yazar boş bırakılamaz"],
    },
    publishYear: {
        type: Number
    },
    stock: {
        type: Number,
        required: [true, "stok miktarı boş bırakılamaz"],
        min: [0, "stok miktarı en az 0 olabilir"],
    },
    price: {
        type: Number,
        required: [true, "fiyat boş bırakılamaz"],
        min: [0, "fiyat en az 0 TL olabilir"],
    },
    isPublish: {
        type: Boolean,
        default: true,
    }

}, {
    timestamps: true
});




module.exports = mongoose.model('Book', bookSchema);


