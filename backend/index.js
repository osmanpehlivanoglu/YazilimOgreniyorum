const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('dotenv').config()

const port = process.env.PORT || 3000

app.use(express.json())

const Book = require('./models/Book')

// 

app.get('/', (req, res) => {
    res.status(201).send("hello world")
})


app.post('/books', async (req, res) => {

    console.log(req.body);

    const newBook = { title: req.body.title, author: req.body.author }
    console.log(newBook);

    const book = await Book.create(newBook)
    return res.status(201).send({ message: "Başarılı", data: book })

})


mongoose.connect(process.env.MONGO_URI)
    .then(
        app.listen(port, () => {
            console.log("sunucu çalışmaya başladı....." + port);
        })
    )
    .catch((error) => {
        console.log(error);
    })

