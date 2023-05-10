const userUtils = require('./../../utils/users.utils')
const { responseOK, responseError } = require('./../../utils/response.utils')
const bcrypt = require('bcrypt')

const registerHandler = async (req, res) => {
    const { userid, password } = req.body
    if (!userid || !password)
        return responseError(res, 400, 'username & password is required')

    const user = await userUtils.getOne({ userid: userid })
    if (user)
        return responseError(res, 400, 'user is existed')

    const encryptPwd = await bcrypt.hash(password, 10)

    if (!userUtils.addOne({ userid: userid, password: encryptPwd }))
        return responseError(res, 400, 'unsuccess')

    return responseOK(res, 201, 'success')
}

module.exports = { registerHandler }