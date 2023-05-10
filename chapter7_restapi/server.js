const express = require('express')
const bp = require('body-parser')
const reqLogger = require('./middleware/middleware.utils')
const app = express()
const PORT = process.env.PORT || 3500

// apply body-parser
app.use(bp.json())
bp.urlencoded({ extended: true })
// apply middleware
app.use(reqLogger)

// apply router
app.use('/', require('./router/root'))
app.use('/employees', require('./router/employee'))

app.listen(PORT, () => {
    console.log(`server listened on port ${PORT}`)
})