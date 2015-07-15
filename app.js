/**
 * Created by deepak on 06/06/15.
 */


var express = require('express'),
    app = express(),
    mongodb = require('mongodb'),
    url = 'mongodb://localhost:27017/MEAN_App_Using_Mongoose',
    port = 3000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

app.use(bodyParser.json());

path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "/client/index.html"));
});

app.use('/js', express.static(__dirname + '/client'));
app.use('/library', express.static(__dirname));

// mongoose model start

var userSchema = require('./server/model.js');

// mongoose model end


// mongoDB connection start
mongoose.connect(url);

var db = mongoose.connection;

db.on('connected', function () {
    console.log('Connected To MongoDB Database');
});
db.on('error', function (err) {
    console.log('Error in connecting to mongoDB ', err);
});

app.listen(port, function () {
    console.log('listening for requests on localhost:%s', port);
});
// mongoDB connection end

var Users = mongoose.model('Users');

var userController = require('./server/controller.js');

app.use('/', require('./server/routes.js'));