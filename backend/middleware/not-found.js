const notFound = (req, res) => res.status(404).send({ message: "böyle bir sayfa yok" })

module.exports = notFound