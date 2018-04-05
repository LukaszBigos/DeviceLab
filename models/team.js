//to be considered at later point, perhaps

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TeamSchema = new Schema(
    {
        name: {type: String, required: true, max: 100},
        member: {type: String, required: true, max: 100}
    }

    //virtual methods for combining full name for OS + Version
);

module.exports = mongoose.model('Team', TeamSchema);