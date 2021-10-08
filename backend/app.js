// Backend ExpressJs app

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

const mongo = require('mongodb')
const MongoClient = mongo.MongoClient
const uri = 'mongodb+srv://user:user@cluster0.pl6it.mongodb.net/todoVue?retryWrites=true&w=majority'
let mongoClient = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const collection = mongoClient.db('todoVue').collection('todos')

mongoClient.connect((err, db) => {
  if (err) {
    console.log(err)

    return
  }

  mongoClient = db
})

// add task
app.post('/api/add/', (req, res) => {
  collection.insertOne({ id: req.body.id, description: req.body.msg, dueTo: req.body.date }, (err, results) => {
    if (err) {
      console.log(err)
      res.send('')

      return
    }

    res.send(results)
  })
})

// delete task
app.delete('/api/delete/:id/', (req, res) => {
  collection.deleteOne({ id: req.params.id }, (err, results) => {
    if (err) {
      console.log(err)
      res.send('')

      return
    }

    res.send()
  })
})

// fetch tasks
app.get('/api/get/', (req, res) => {
  collection.find().toArray((err, results) => {
    if (err) {
      console.log(err)
      res.send([])

      return
    }

    res.send(results)
  })
})

app.listen(8081)
console.log('backend listen on port 8081')
