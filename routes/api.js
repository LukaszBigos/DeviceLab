const express = require('express');
const router = express.Router();
const Device = require('../models/device');


router.get('/', function(req, res, next) {
    res.send('test home page update'); 
});

//get list of devices from db
router.get('/devices', function(req, res, next) {
    Device.find({}).then(function(device){
        res.send(device);
    });
});

//add a new device to db
router.post('/devices', function(req, res, next) {
    Device.create(req.body).then(function(device) {
        res.send(device);
    }).catch(next);
});

//update devices in db
router.put('/devices/:id', function(req, res, next) {
    Device.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Device.findOne({_id: req.params.id}).then(function(device){
            res.send(device);
        });       
    });
});

//delete a devices from db
router.delete('/devices/:id', function(req, res, next) {
    Device.findByIdAndRemove({_id: req.params.id}).then(function(device){
        res.send(device); 
    }); 
});

module.exports = router;