# dotenv

- install: npm install dotenv
  -> custom .env and combine into 'process.env'
- usage: require('dotenv').config()

# jsonwebtoken

- install: npm install jsonwebtoken
  -> jwt utility
- usage:
  -- const jwt = require('jsonwebtoken')
  -- const token = jwt.sign(<payload>, <secret_key>, <additionalInfo(expiredTo,...)>)
  -- jwt.verify(<token>, <secret_key>)

# cookie-parser

- install: npm install cookie-parser
  -> parse cookie
- usage:
  -- const cookieParser = require('cookie-parser')
  -- app.use(cookieParser())
