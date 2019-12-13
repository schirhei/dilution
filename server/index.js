const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const constants = require('./constants');

const app = express();
const port = 8080;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

var db;
const client = new MongoClient(constants.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true });
client.connect(err => {
    if (err) return console.log(err)
    db = client.db('boards') // whatever your database name is
    app.listen(3000, () => {
      console.log('listening on 3000')
    })
})
app.get('/', (req, res) => res.send('work'));

app.get('*', (req, res) => res.send(req.url));
app.listen(port, () => console.log(`App listens to ${port}`))