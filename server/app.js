var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const mysql      = require('mysql');

var app = express();
const index = require('./routes/index');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
myConnection = require('express-myconnection'); // express-myconnection module

dbOptions = {
      host: 'localhost',
      user: 'root',
      password: 'mysqlvitech',
      database: 'image'
};
app.use(myConnection(mysql, dbOptions, 'single')); 

app.use(index);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


module.exports = app;