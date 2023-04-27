# express framework for nodejs

- install: npm install express

# use:

- const exporess = require('express')
- const app = express()
- app.get/post/put/delete/all/...
  example:
  app.get('/', (req, res) => {
  //TODO: process data here
  })

  app.get('/hello', (req, res, next) => {
  // TODO: process middleware here
  next()
  }, (req, res) => {
  // TODO: process data here
  })

- apply middleware:
  app.get('/middleware', [<middleware 1>, <middleware 2>, ...])

- all exception route must be defined in the end of router register
  app.get('/\*', (req, res) => {
  res.status(404).send('<h1>there is nothing to do</h1>')
  })
