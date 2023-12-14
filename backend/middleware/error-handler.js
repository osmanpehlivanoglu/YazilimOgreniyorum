const errorHandler = async (err, req, res, next) => {

    // validasyon hatalarında modele eklediğimiz hata mesajlarını gösterelim
    if (err.name = "ValidationError") {
        return res.status(403).send({ message: err.message })
    }

    // diğer tüm hatalarda da bu dönebilir
    return res.status(500).send({ message: "bi şeyler ters gitti" })
}

module.exports = errorHandler