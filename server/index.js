const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');
const cors = require('cors');
const constants = require('./constants');



const app = express();
const port = 8080;
const api = require('express').Router();

app.use(express.static('public'));
app.use('/api', api);
app.use(express.static(path.join(__dirname, 'build')));

app.use(cors({
  origin: '*'
}));
app.options('*', cors()) 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var db;
const client = new MongoClient(constants.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true });
client.connect(err => {
    if (err) return console.log(err)
    db = client.db('boards') // whatever your database name is
    app.listen(3001, () => {
      console.log('listening on 3001')
    })
})
app.get('/', (req, res) => res.send('work'));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));

api.get('*', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('boards');
    // Find some documents
    collection.find({'path_id': 2}).toArray(function(err, docs) {
      console.log(docs);
      callback(docs);
    });
  }
  findDocuments(db, (d) => {
    console.log(d);
    if (d) {
      
      res.send(d);
    } else {
      res.send("no data");
    }
    
    
  });
  
});

app.listen(port, () => console.log(`App listens to ${port}`))