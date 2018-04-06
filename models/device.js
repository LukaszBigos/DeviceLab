const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const  DeviceSchema = new Schema(
    {
        name: {
            type: String, 
            required: [true, 'Name field is required'], 
            max: 100
        },
        model: {
            type: String, 
            required: true, 
            max: 200
        },
        OS: {
            type: String,
            ref: 'OS',
            required: true, max: 50
        }
    }

    //virtual methods for adding e.g. url to particular device?
);

module.exports = mongoose.model('Device', DeviceSchema);