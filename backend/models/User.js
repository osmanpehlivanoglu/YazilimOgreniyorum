const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

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

userSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
}


module.exports = mongoose.model('User', userSchema);