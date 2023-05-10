const userUtils = require('./../../utils/users.utils')
const { responseOK, responseError } = require('./../../utils/response.utils')
const jwt = require('jsonwebtoken')

const refreshTokenHandler = async (req, res) => {
    const token = req.cookies['refreshToken']
    if (!token) {
        return responseError(res, 400, 'unauthorized: token expired')
    }

    const user = await userUtils.getOne({ refreshToken: token })
    if (!user)
        return responseError(res, 401, 'unauthorized')

    jwt.verify(
        token,
        process.env.REFRESH_TOKEN_SECRET,
        ((err, decoded) => {
            console.log(err, decoded)
            if (err || user.userid !== decoded.userid) {
                return responseError(res, 403, 'forbidden')
            }

            const accessToken = jwt.sign(
                { userid: user.userid },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '5m' }
            )

            return responseOK(res, 'refresh success', { accessToken })
        })
    )
}

module.exports = { refreshTokenHandler }