const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://0.0.0.0:27017/seekIN',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection
db.once('open', () => console.log('db connected'));
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})