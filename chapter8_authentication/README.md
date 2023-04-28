# body-parser

- allow parse req/res.body to json

# usage

- install: npm install body-parser
- add these lines before parse body to json
  const bp = require('body-parser)
  app.use(bp.json())
  bp.urlencoded({ extended: true })
