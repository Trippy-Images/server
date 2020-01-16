require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(_=> console.log('Connected to database'))
  .catch(_=> console.log('Failed to connect to database'))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/', routes)
app.use(errorHandler)

app.listen(port, _=> console.log('server listening at port, ', port))