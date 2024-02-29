const express = require('express')
require('express-async-errors')
const app = express()
const connect = require('./db/connect_mongoose')

const bookRoutes = require('./routes/books')
const authRoutes = require('./routes/auth')

const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')



require('dotenv').config()

const port = process.env.PORT || 3000

// middleware
app.use(express.json())
app.use('/api/v1/books', bookRoutes)
app.use('/api/v1/auth', authRoutes)
app.use(errorHandler)
app.use(notFound)

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