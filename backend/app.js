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
const uri = process.env.MONGO_URI
const mongoClient = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const collection = mongoClient.db('todoVue').collection('todos')

mongoClient.connect((err, db) => {
  if (err !== null) {
    console.log(err)

    return
  }

  mongoClient = db
})

app.post('/', (req, res) => {
  collection.insertOne({ id: , description: , dueTo:  }, (err, results) => {
    if (err) {
      console.log(err)
      res.send('')

      return
    }

    res.send(results.ops[0])  // return new document
  })
})

app.post('/', (req, res) => {
  collection.removeOne({ id: }, (err, results) => {
    if (err) {
      console.log(err)
      res.send('')
      
      return
    }

    res.send()
  })
})

app.get('/', (req, res) => {
  collection.find().toArray((err, results) => {
    if (err) {
      console.log(err)
      res.send([])

      return
    }

    res.send(results)
  })
})

app.listen(8080)
