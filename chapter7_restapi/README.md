# body-parser

- allow parse req/res.body to json

# usage

- install: npm install body-parser
- add these lines before parse body to json
  const bp = require('body-parser)
  app.use(bp.json())
  bp.urlencoded({ extended: true })

# request

- controller:
  const functionA = (request, response) => {
  // TODO: process data here
  }
- params: set => (:paramName), get => request.params
- body: set => json body (require('body-parser)), get => request.body

# response

return response.status(<httpStatusCode>).json(<object>)/sendFile(<file>)/send(<object>)/...
