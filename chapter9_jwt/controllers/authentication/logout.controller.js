const userUtils = require("../../utils/users.utils")
const { responseOK, responseError } = require('./../../utils/response.utils')

const logoutHandler = async (req, res) => {
    const users = userUtils.getAll()
    const refreshToken = req.cookies['refreshToken']
    if (!refreshToken)
        return responseError(res, 400, 'already logged out')

    // delete refresh token in db
    const user = users.find(user => user.refreshToken === refreshToken)
    if (!user)
        return responseError(res, 400, 'already logged out')


    if (await userUtils.updateOne({ ...user, refreshToken: '' }))
        // clear refresh token in cookie
        res.clearCookie('refreshToken')

    return responseOK(res, 'logout success')
}

module.exports = { logoutHandler }