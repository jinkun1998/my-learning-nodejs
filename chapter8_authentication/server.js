const express = require('express')
const bp = require('body-parser')
const reqLogger = require('./middleware/middleware')
const app = express()
const PORT = process.env.PORT || 3500

// apply body-parser
app.use(bp.json())
bp.urlencoded({ extended: true })
// apply middleware
app.use(reqLogger)

// apply router
app.use('/', require('./router/root.router'))
app.use('/', require('./router/authentication.router'))
app.use('/employees', require('./router/employee.router'))

app.listen(PORT, () => {
    console.log(`server listened on port ${PORT}`)
})