const mongoose = require('mongoose');

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number
        }
    },
    {
        timestamps: true
    }
)


module.exports = mongoose.model('Book', bookSchema)

