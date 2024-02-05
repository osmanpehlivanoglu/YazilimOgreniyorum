const express = require('express')
const router = express.Router()

const authenticationMiddleware = require('../middleware/auth')

const { getAllBooks, getBook, addBook, updateBook, deleteBook, login, cokGizli } = require('../controllers/books')

/* router.get('/', getAllBooks)
router.post('/', addBook)
router.get('/:id', getBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook) */


router.route('/').get(getAllBooks).post(addBook)
router.route('/bilgilerim').get(authenticationMiddleware, cokGizli)
router.route('/:id').get(getBook).put(updateBook).delete(deleteBook)

router.route('/giris').post(login)


module.exports = router