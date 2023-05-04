const userUtils = require("../../utils/users.utils")


const logoutHandler = async (req, res) => {
    const users = userUtils.getAll()
    const refreshToken = req.cookies['refreshToken']
    if (!refreshToken)
        return res.status(400).json({ message: 'already logged out' })

    // delete refresh token in db
    const user = users.find(user => user.refreshToken === refreshToken)
    if (!user)
        return res.status(400).json({ message: 'already logged out' })

    if (await userUtils.updateOne({ ...user, refreshToken: '' }))
        // clear refresh token in cookie
        res.clearCookie('refreshToken')

    return res.json({ message: 'logout success' })
}

module.exports = { logoutHandler }