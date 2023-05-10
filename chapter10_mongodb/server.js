const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const reqLogger = require('./middleware/middleware')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3500

// apply body-parser
app.use(bodyParser.json())
bodyParser.urlencoded({ extended: true })
// apply cookie-parser
app.use(cookieParser())
// apply middleware
app.use(reqLogger)

// apply router
app.use('/', require('./router/root.router'))
app.use('/', require('./router/authentication.router'))
app.use('/employees', require('./router/employee.router'))

mongoose.connect(process.env.MONGODB_CONNECTSTRING)

app.listen(PORT, () => {
    console.log(`server listened on port ${PORT}`)
})