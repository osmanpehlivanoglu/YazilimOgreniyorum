const express = require('express')
const router = express.Router()

const { getAllBooks, getBook, addBook, updateBook, deleteBook } = require('../controllers/books')

/* router.get('/', getAllBooks)
router.post('/', addBook)
router.get('/:id', getBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook) */


router.route('/').get(getAllBooks).post(addBook)
router.route('/:id').get(getBook).put(updateBook).delete(deleteBook)

module.exports = router