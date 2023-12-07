const asyncWrapper = require('../middleware/async')
const Book = require('../models/Book')

const getAllBooks = asyncWrapper(async (req, res) => {

    const books = await Book.find({});
    return res.status(201).send({ message: "Başarılı", data: books, count: books.length })

})

const getBook = asyncWrapper(async (req, res) => {

    const id = req.params.id

    const book = await Book.findById(id)
    if (!book) {
        return res.status(404).send({ message: "Kitap bulunamadı" })
    }

    return res.status(201).send({ message: "Başarılı", data: book })

})

const addBook = asyncWrapper(async (req, res) => {

    if (!req.body.title || !req.body.author) {
        return res.status(404).send({ message: "Hata! title ve author gerekli" })
    }

    const newBook = { title: req.body.title, author: req.body.author, publishYear: req.body.publishYear }
    const book = await Book.create(newBook)
    return res.status(201).send({ message: "Başarılı", data: book })

})

const updateBook = asyncWrapper(async (req, res) => {

    const { id } = req.params

    const book = await Book.findByIdAndUpdate(id, req.body)

    if (!book) {
        return res.status(404).send({ message: "Kitap bulunamadı" })
    }

    const updatedBook = await Book.findById(id)
    return res.status(201).send({ message: "Başarılı", data: updatedBook })

})

const deleteBook = asyncWrapper(async (req, res) => {

    const { id } = req.params

    const book = await Book.findByIdAndDelete(id)
    if (!book) {
        return res.status(404).send({ message: "Kitap bulunamadı" })
    }
    return res.status(201).send({ message: "Başarılı", data: book })

})

module.exports = { getAllBooks, getBook, addBook, updateBook, deleteBook }