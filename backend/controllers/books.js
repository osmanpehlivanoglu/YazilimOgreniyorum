const Book = require('../models/Book')

const getAllBooks = async (req, res) => {

    const books = await Book.find({});
    return res.status(201).send({ message: "Başarılı", data: books, count: books.length })

}

const getBook = async (req, res) => {

    const id = req.params.id

    const book = await Book.findById(id)
    if (!book) {
        return res.status(404).send({ message: "Kitap bulunamadı" })
    }

    return res.status(201).send({ message: "Başarılı", data: book })

}

const addBook = async (req, res) => {

    const newBook = { title: req.body.title, author: req.body.author, publishYear: req.body.publishYear }
    const book = await Book.create(newBook)
    return res.status(201).send({ message: "Başarılı", data: book })

}

const updateBook = async (req, res) => {

    const { id } = req.params

    const book = await Book.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })

    if (!book) {
        return res.status(404).send({ message: "Kitap bulunamadı" })
    }

    return res.status(201).send({ message: "Başarılı", data: book })

}

const deleteBook = async (req, res) => {

    const { id } = req.params

    const book = await Book.findByIdAndDelete(id)
    if (!book) {
        return res.status(404).send({ message: "Kitap bulunamadı" })
    }
    return res.status(201).send({ message: "Başarılı", data: book })

}

module.exports = { getAllBooks, getBook, addBook, updateBook, deleteBook }