const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const path = require('path')
const app = express()
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-edtm6.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
// req.query = Acessar query params (filtros)
// req.params = Acessar route params (put, delete) 
// req.body = Acessar corpo da requisição (post, put)
app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)
app.listen(3333)
