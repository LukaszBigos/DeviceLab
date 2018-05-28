const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DeviceSchema = new Schema({
    name: {
        type: String, 
        required: [true, 'Name field is required'], 
        max: 100
    },
    os: {
        type: String,
        // ref: 'OS',
        required: true, 
        max: 50
    },
    status: {
        type: String, 
        required: true, 
        max: 50
    },
    team: {
        type: String,
        max: 100
    }
    //virtual methods for adding e.g. url to particular device?
});

const Device = mongoose.model('Device', DeviceSchema);

module.exports = Device;