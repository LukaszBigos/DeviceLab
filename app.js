var express = require('express');
const routes = require('./routes/api');

var app = express();
app.use(routes);

//Set up mongoose connection
// var mongoose = require('mongoose');
// var mongoDB = 'mongodb://<dbuser>:<dbpassword>@ds235169.mlab.com:35169/device_lab';
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(3000, () => {
    console.log('app is ready and listens on port 3000');
});