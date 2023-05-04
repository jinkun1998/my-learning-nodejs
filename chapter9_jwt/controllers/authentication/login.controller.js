const userUtils = require('./../../utils/users.utils')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

const loginHandler = async (req, res) => {
    const { userid, password } = req.body
    if (!userid || !password)
        return res.status(400).json({ message: 'username & password is required' })

    const users = await userUtils.getAll()
    const user = users.find(user => user.userid === userid)
    console.log(user)
    if (!user)
        return res.status(401).json({ message: 'login failed' })

    if (!await bcrypt.compare(password, user.password))
        return res.status(401).json({ message: 'login failed' })


    // generate token
    const accessToken = jwt.sign(
        { userid: user.userid },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '5m' }
    )
    const refreshToken = jwt.sign(
        { userid: user.userid },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '1d' }
    )

    // update token to user.json
    await userUtils.updateOne({ ...user, refreshToken })
    res.cookie('refreshToken', refreshToken)

    return res.json({ message: 'login success', accessToken })
}

module.exports = { loginHandler }