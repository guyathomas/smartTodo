var express = require('express');
var app = express();
var handler = require('./requestHandler.js')
var bodyParser = require('body-parser')
var cors = require('cors')


//Middleware
app.use(express.static('../'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//Routes
app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/list', handler.getItems);
app.post('/list', handler.addItem);
app.options('/list', cors())
app.delete('/list', handler.deleteItem)

app.listen(3000);