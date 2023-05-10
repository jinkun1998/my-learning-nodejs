const userUtils = require('./../../utils/users.utils')
const { responseOK, responseError } = require('./../../utils/response.utils')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

const loginHandler = async (req, res) => {
    const { userid, password } = req.body
    if (!userid || !password) {
        return responseError(res, 400, 'username & password is required')
    }

    const user = await userUtils.getOne({ userid: userid })
    if (!user) {
        return responseError(res, 400, 'login failed')
    }
    if (!await bcrypt.compare(password, user.password)) {
        return responseError(res, 400, 'login failed')
    }

    // generate token
    const accessToken = jwt.sign(
        { userid: user.userid },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1d' }
    )
    const refreshToken = jwt.sign(
        { userid: user.userid },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '1d' }
    )

    // update token to user.json
    await userUtils.updateOne({ userid: userid }, { refreshToken: refreshToken })
    res.cookie('refreshToken', refreshToken)

    return responseOK(res, 200, 'login success', { accessToken })
}

module.exports = { loginHandler }