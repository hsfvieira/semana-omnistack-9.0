const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-edtm6.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
// req.query = Acessar query params (filtros)
// req.params = Acessar route params (put, delete) 
// req.body = Acessar corpo da requisição (post, put)
app.use(express.json())
app.use(routes)
app.listen(3333)
