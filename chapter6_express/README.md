# express framework for nodejs

- install: npm install express

# use:

- const exporess = require('express')
- const app = express()
- app.get/post/put/delete/all/...
- example:
  app.get('/', (req, res) => {
  //TODO: process data here
  })

  app.get('/hello', (req, res, next) => {
  // TODO: process middleware here
  next()
  }, (req, res) => {
  // TODO: process data here
  })
