const express = require('express')
const reqLogger = require('./middleware/middleware.utils')
const app = express()
const PORT = process.env.PORT || 3500

// apply middleware
app.use(reqLogger)

// apply router
app.use('/', require('./router/root'))
app.use('/goto', require('./router/goto'))

app.listen(PORT, () => {
    console.log(`server listened on port ${PORT}`)
})