const userUtils = require('./../../utils/users.utils')
const jwt = require('jsonwebtoken')

const refreshTokenHandler = async (req, res) => {
    const token = req.cookies['refreshToken']
    if (!token)
        return res.status(400).json({ message: 'unauthorized: token expired' })
    const users = await userUtils.getAll()
    const user = users.find(user => user.refreshToken == token)
    if (!user)
        return res.status(401).json({ message: 'unauthorized' })

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

    // update new refreshToken
    await userUtils.updateOne({ ...user, refreshToken })

    return res.json({ message: 'refresh success', accessToken })
}

module.exports = { refreshTokenHandler }