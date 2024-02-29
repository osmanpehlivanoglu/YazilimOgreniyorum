const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Ad boş bırakılamaz"],
        maxlength: 50,
        minlength: 3,
    },
    email: {
        type: String,
        required: [true, "Email boş bırakılamaz"],
        unique: [true, "Bu email zaten kayıtlı"], // buraya yazdık ama bu hatayı yakalamadık gerçekte 
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Gecersiz email adresi"]
    },
    password: {
        type: String,
        required: [true, "Sifre boş bırakılamaz"],
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('User', userSchema);