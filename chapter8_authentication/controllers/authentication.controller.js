const usersData = require('../data/users.json')
const data = {
    users: usersData,
    setUsers: function (data) { this.users = data }
}
const bcrypt = require('bcrypt')
const userUtils = require('./../utils/users.utils')

const register = async (req, res) => {
    const { userid, password } = req.body
    if (!userid || !password)
        return res.status(400).json({ message: 'username & password is required' })

    const user = data.users.find(user => user.userid === userid)
    if (user)
        return res.status(400).json({ message: 'user is existed' })

    const encryptPwd = await bcrypt.hash(password, 10)
    const newUser = {
        userid: userid,
        password: encryptPwd
    }
    data.setUsers([...data.users, newUser])
    if (!userUtils.save(data.users))
        return res.status(400).json({ message: 'unsuccess' })
    return res.json({ message: 'success' })
}

const login = async (req, res) => {
    const { userid, password } = req.body
    if (!userid || !password)
        return res.status(400).json({ message: 'username & password is required' })

    const user = data.users.find(user => user.userid === userid)
    if (!user)
        return res.status(401).json({ message: 'login failed' })

    if (!await bcrypt.compare(password, user.password))
        return res.status(401).json({ message: 'login failed' })

    return res.json({ message: 'login success' })
}

module.exports = { register, login }