var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('test home page update'); 
});

app.get('/devices', function(req, res) {
    res.send('test page for device list'); 
});

app.listen(3000);