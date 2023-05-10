const userUtils = require("../../utils/users.utils")
const { responseOK, responseError } = require('./../../utils/response.utils')

const logoutHandler = async (req, res) => {
    const refreshToken = req.cookies['refreshToken']
    if (!refreshToken) {
        return responseError(res, 400, 'already logged out')
    }

    const user = userUtils.getOne({ refreshToken: refreshToken })
    if (!user) {
        return responseError(res, 400, 'already logged out')
    }

    if (await userUtils.updateOne({ refreshToken: refreshToken }, { refreshToken: '' })) {
        // clear refresh token in cookie
        res.clearCookie('refreshToken')
    }

    return responseOK(res, 200, 'logout success')
}

module.exports = { logoutHandler }