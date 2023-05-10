const userUtils = require('./../../utils/users.utils')
const { responseOK, responseError } = require('./../../utils/response.utils')
const bcrypt = require('bcrypt')

const registerHandler = async (req, res) => {
    const { userid, password } = req.body
    if (!userid || !password)
        return responseError(res, 400, 'username & password is required')

    const user = userUtils.getAll().find(user => user.userid === userid)
    if (user)
        return responseError(res, 400, 'user is existed')

    const encryptPwd = await bcrypt.hash(password, 10)
    const newUser = {
        userid: userid,
        password: encryptPwd
    }

    if (!userUtils.addOne(newUser))
        return responseError(res, 400, 'unsuccess')

    return responseOK(res, 'success')
}

module.exports = { registerHandler }