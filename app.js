const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//connection to mongodb
mongoose.connect('mongodb://localhost/devicelab');
mongoose.Promise = global.Promise;


app.use(bodyParser.json());


// initialize  routes
app.use('/api', require('./routes/api'));


app.listen(process.env.port || 3000, () => {
    console.log('app is ready and listens on port 3000');
});