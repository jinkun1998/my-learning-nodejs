const userUtils = require('./../../utils/users.utils')
const bcrypt = require('bcrypt')

const registerHandler = async (req, res) => {
    const { userid, password } = req.body
    if (!userid || !password)
        return res.status(400).json({ message: 'username & password is required' })

    const user = userUtils.getAll().find(user => user.userid === userid)
    if (user)
        return res.status(400).json({ message: 'user is existed' })

    const encryptPwd = await bcrypt.hash(password, 10)
    const newUser = {
        userid: userid,
        password: encryptPwd
    }

    if (!userUtils.addOne(newUser))
        return res.status(400).json({ message: 'unsuccess' })
    return res.json({ message: 'success' })
}

module.exports = { registerHandler }