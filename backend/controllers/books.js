const Book = require('../models/Book')

var jwt = require('jsonwebtoken');


const replaceTurkishChars = (fieldValue) => {
    return fieldValue.toLocaleLowerCase()
        .replace(/i/gi, '[iİ]')
        .replace(/ı/gi, '[ıI]');
};


const getAllBooks = async (req, res) => {
    const { title, author, sort, fields, numericFilters } = req.query;
    const newQuery = {};

    if (title) {
        newQuery.title = replaceTurkishChars(title);
    }

    if (author) {
        newQuery.author = replaceTurkishChars(author);
    }

    if (numericFilters) {
        const operatorMap = {
            ">": "$gt",
            ">=": "$gte",
            "=": "$eq",
            "!=": "$ne", // ayriyeten not equal comparator'unu ekledim
            "<": "$lt",
            "<=": "$lte",
        };
        const regexStr = /\b(<|>|>=|=|<|<=|!=)\b/g;
        let filters = numericFilters.replace(
            regexStr,
            (match) => `-${operatorMap[match]}-`,
        );
        const options = ["price", "stock", "edition"];

        filters = filters.split(",");

        for (const item of filters) {
            const [field, operator, value] = item.split("-");
            if (options.includes(field)) {
                newQuery[field] = { [operator]: Number(value) };
            }
        }
    }

    console.log("şu ana kadar oluşturulan obje: ", newQuery);

    let result = Book.find(newQuery);

    if (sort) {
        const sortList = sort.split(",").join(" ");
        result = result.sort(sortList);
    } else {
        result = result.sort("dateAdded");
    }

    if (fields) {
        const fieldsList = fields.split(",").join(" ");
        result.select(fieldsList);
    }

    const page = Number(req.query.params) || 1;
    const limit = Number(req.query.params) || 99;
    const skipCount = (page - 1) * limit;

    result = result.skip(skipCount).limit(limit);

    const allBooks = await result;

    console.log(result);

    return res
        .status(200)
        .json({ "Bütün kitapların sayısı": allBooks.length, Kitaplar: allBooks });
};

const getBook = async (req, res) => {

    const id = req.params.id

    const book = await Book.findById(id)
    if (!book) {
        return res.status(404).send({ message: "Kitap bulunamadı" })
    }

    return res.status(201).send({ message: "Başarılı", data: book })

}

const addBook = async (req, res) => {

    const newBook = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        category: req.body.category,
        language: req.body.language,
        publicationDate: req.body.publicationDate,
        edition: req.body.edition,
        placeOfPublication: req.body.placeOfPublication,
        width: req.body.width,
        height: req.body.height,
        pageCount: req.body.pageCount,
        coverType: req.body.coverType,
        paperType: req.body.paperType,
        barcode: req.body.barcode,
        stock: req.body.stock,
        price: req.body.price,
        image: req.body.image
    };

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

const login = async (req, res) => {
    console.log("merhaba");
    const id = 99

    const secret = process.env.JWT_SECRET

    const email = req.body.email
    const token = jwt.sign({ id, email }, secret, { expiresIn: '1d' })

    return res.status(201).send({ message: "Başarılı", data: token })

}

const cokGizli = async (req, res) => {

    return res.status(201).send({ message: "Başarılı", data: req.yasir })
}



module.exports = { getAllBooks, getBook, addBook, updateBook, deleteBook, login, cokGizli }