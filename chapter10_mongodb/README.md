# mongoose

- install: npm i mongoose
- usage: const mongoose = require('mongoose')
- connect: mongoose.connect(<db url>, { <options> })
- use schemas: const schema = mongoose.Schema
- create schemas: const someSchema = new Schema({
  property:{
  type: String|Date|Boolean|Number|...
  required: true|false
  }
  })
- export: module.exports = mongoose.model('<modelName>', <schema>)
