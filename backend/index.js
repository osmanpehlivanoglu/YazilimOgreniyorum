const express = require('express')
const app = express()
const connect = require('./db/connect_mongoose')

require('dotenv').config()

const port = process.env.PORT || 3000

app.use(express.json())

const Book = require('./models/Book')

// 

app.get('/', (req, res) => {
    try {
        res.status(201).send("hello world")

    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
})


app.post('/books', async (req, res) => {

    try {

        if (!req.body.title || !req.body.author) {
            return res.status(404).send({ message: "Hata! title ve author gerekli" })
        }

        const newBook = { title: req.body.title, author: req.body.author, publishYear: req.body.publishYear }
        const book = await Book.create(newBook)
        return res.status(201).send({ message: "Başarılı", data: book })

    } catch (error) {

        return res.status(500).send({ message: error.message })

    }

})

app.get('/books', async (req, res) => {

    try {

        const books = await Book.find({});
        return res.status(201).send({ message: "Başarılı", data: books, count: books.length })

    } catch (error) {

        return res.status(500).send({ message: error.message })

    }

})

app.get('/books/:id', async (req, res) => {

    const id = req.params.id
    // const {id, elma} = req.params

    console.log(id);


    try {

        const book = await Book.findById(id)
        if (!book) {
            return res.status(404).send({ message: "Kitap bulunamadı" })
        }

        return res.status(201).send({ message: "Başarılı", data: book })

    } catch (error) {

        return res.status(500).send({ message: error.message })

    }

})


// put tüm alanlar güncelleniyor
// patch bazı alanlar için


app.put('/books/:id', async (req, res) => {

    const { id } = req.params

    console.log(id);
    console.log(req.body);

    try {

        const book = await Book.findByIdAndUpdate(id, req.body)

        if (!book) {
            return res.status(404).send({ message: "Kitap bulunamadı" })
        }

        const updatedBook = await Book.findById(id)
        return res.status(201).send({ message: "Başarılı", data: updatedBook })

    } catch (error) {

        return res.status(500).send({ message: error.message })

    }

})

app.delete('/books/:id', async (req, res) => {

    const { id } = req.params

    try {

        const book = await Book.findByIdAndDelete(id)
        if (!book) {
            return res.status(404).send({ message: "Kitap bulunamadı" })
        }
        return res.status(201).send({ message: "Başarılı", data: book })

    } catch (error) {

        return res.status(500).send({ message: error.message })

    }

})

const start = async () => {
    try {
        await connect(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log("sunucu çalışmaya başladı....." + port);
        })
    } catch (error) {
        console.log(error);
    }
}

start()