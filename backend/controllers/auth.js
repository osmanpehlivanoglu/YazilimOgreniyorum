const User = require('../models/User')

const register = async (req, res) => {

    const user = await User.create(req.body)
    return res.json({ user })
}

const login = async (req, res) => {
    return res.send("merhaba")
}


module.exports = { register, login }