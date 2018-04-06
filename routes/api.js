const express = require('express');
const router = express.Router();

//get list of devices from db
router.get('/devices', function(req, res) {
    res.send('test page for device list'); 
});

//add a new device to db
router.post('/devices', function(req, res) {
    console.log(req.body);
    res.send({
        type: 'POST',
        name: req.body.name,
        OS: req.body.OS,
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

router.get('/', function(req, res) {
    res.send('test home page update'); 
});

module.exports = router;