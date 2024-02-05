const jwt = require("jsonwebtoken")

const authenticationMiddleware = (req, res, next) => {
    const authToken = req.headers.authorization

    if (!authToken || !authToken.startsWith("Bearer ")) {
        return res.status(401).send({ message: "Geçersiz kimlik" })
    } else {
        const token = authToken.split(" ")[1]
        const secret = process.env.JWT_SECRET
        const decoded = jwt.verify(token, secret)

        const { id, email } = decoded
        req.user = { id, email }
        req.yasir = "Akkurt"
        next()
    }
}

module.exports = authenticationMiddleware