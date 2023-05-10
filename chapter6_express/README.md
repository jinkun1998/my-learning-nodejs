# express framework for nodejs

- install: npm install express

# usage:

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

- apply middleware for specific route:
  app.get/use('/middleware', [<middleware 1>, <middleware 2>, ...])

- apply middleware for all route:
  app.use(<middleware>)/.get(/\*)

more info: https://expressjs.com/en/guide/using-middleware.html

- all exception route must be defined in the end of router register
  app.get('/\*', (req, res) => {
  res.status(404).send('<h1>there is nothing to do</h1>')
  })
