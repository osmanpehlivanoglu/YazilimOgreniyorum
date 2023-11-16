const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('dotenv').config()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {

    console.log(req.method)
    console.log(req.url)

    res.status(201).send("hello world")
})


app.get('/products', (req, res) => {
    console.log(req.url)

    res.send("merhaba")
})


app.get('/products/:id', (req, res) => {
    console.log(req.url);
    console.log(req.params);

    res.send("seçili ürünün id si:  " + req.params.id)

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

