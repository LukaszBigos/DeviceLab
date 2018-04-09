const express = require('express');
const router = express.Router();
const Device = require('../models/device');


router.get('/', function(req, res) {
    res.send('test home page update'); 
});

//get list of devices from db
router.get('/devices', function(req, res) {
    res.send('test page for device list'); 
});

//add a new device to db
router.post('/devices', function(req, res) {
    Device.create(req.body).then(function(device) {
        res.send(device);
    });
});

//update devices in db
router.put('/devices/:id', function(req, res) {
    res.send({type: 'PUT'});
});

//delete a devices from db
router.delete('/devices/:id', function(req, res) {
    res.send({type: 'DELETE'});
});

module.exports = router;