const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
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
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);


