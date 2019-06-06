const express = require('express');
var bodyParser = require('body-parser');
// var mongodb = require('mongodb');
var mongoose = require('mongoose');
var ejs = require('ejs');
// var mailer = require('./mailer');
var Schema = mongoose.Schema;

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.set('views', './templates');

app.set('view engine', 'ejs');



app.listen(process.env.PORT || 8093, function () {
    console.log("Server is up and running");
});
