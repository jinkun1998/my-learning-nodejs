const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyToken = (req, res, next) => {
    const authenticationHeader = req.headers['authorization']
    if (!authenticationHeader)
        return res.status(401).json({ message: 'unauthorized: missing header' })

    const token = authenticationHeader.split(' ')[1]
    if (!token)
        return res.status(401).json({ message: 'unauthorized: missing token' })

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err)
                return res.status(403).json({ message: 'unauthorized: invalid token' })

            next()
        }
    )
}

module.exports = verifyToken