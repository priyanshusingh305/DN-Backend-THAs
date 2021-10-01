var express = require('express');
var app = express();
var port= 3000
var myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
  }
  
  app.use(myLogger)
  
  app.get('/', function (req, res) {
    res.send('Hello World!')
  })
   
  app.listen(port);