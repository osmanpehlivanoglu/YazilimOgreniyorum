const express = require('express')
const app = express()
const connect = require('./db/connect_mongoose')
const books = require('./routes/books')
require('dotenv').config()

const port = process.env.PORT || 3000

// middleware
app.use(express.json())
app.use('/api/v1/books', books)

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