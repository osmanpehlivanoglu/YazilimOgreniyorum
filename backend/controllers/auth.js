const User = require('../models/User')


const register = async (req, res) => {

    const user = await User.create(req.body)

    const token = user.getSignedJwtToken()

    return res.json({ user: user.name, token })
}

const login = async (req, res) => {
    return res.send("merhaba")
}


module.exports = { register, login }