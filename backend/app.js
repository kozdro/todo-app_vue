// Backend ExpressJs app

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.listen(8080)

const mongo = require('mongodb')
const MongoClient = mongo.MongoClient
const uri = 'mongodb+srv://user:user@cluster0.pl6it.mongodb.net/todoVue?retryWrites=true&w=majority'
let client

const mongoClient = new MongoClient(uri, {
  useNewUrlParser: true
})

mongoClient.connect((err, db) => {
  if (err !== null) {
    console.log(err)

    return
  }
  
  client = db
})

app.post('/', (req, res) => {
  const collection = client.db('todoVue').collection('todos')
  
  collection.insertOne({ description: , dueTo:  }, (err, results) => {
    if (err) {
      console.log(err)
      res.send('')

      return
    }

    res.send(results.ops[0])
  })
})

app.post('/', (req, res) => {
  const collection = client.db('todoVue').collection('todos')

  collection.removeOne({ id: }, (err, results) => {
    if (err) {
      console.log(err)
      res.send('')
      
      return
    }

    res.send()
  })
})
