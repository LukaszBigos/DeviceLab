const express = require('express');
const router = express.Router();
const Device = require('../models/device');
const path = require('path');


router.get('/', (req, res, next) => {
    res.render('./../client/index.html');
});

//get list of devices from db
router.get('/devices', (req, res, next) => {
    Device.find({}).then((device) => {
        res.send(device);
    });
});

//add a new device to db
router.post('/devices', (req, res, next) => {
    Device.create(req.body).then((device) => {
        res.send(device);
    }).catch(next);
});

//update devices in db
router.put('/devices/:id', (req, res, next) =>{
    Device.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Device.findOne({_id: req.params.id}).then((device) =>{
            res.send(device);
        });       
    });
});

//delete a devices from db
router.delete('/devices/:id', (req, res, next) => {
    Device.findByIdAndRemove({_id: req.params.id}).then((device) => {
        res.send(device); 
    }); 
});

module.exports = router;