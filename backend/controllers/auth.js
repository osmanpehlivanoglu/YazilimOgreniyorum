const User = require('../models/User')
const bcrypt = require('bcrypt')

const register = async (req, res) => {

    const { name, email, password } = req.body

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({ name, email, password: hashedPassword })

    return res.json({ user })
}

const login = async (req, res) => {
    return res.send("merhaba")
}


module.exports = { register, login }