var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OSSchema = new Schema(
    {
        name: {type: String, required: true, max: 100},
        version: {type: String, required: true, max: 200}
    }
    //virtual methods for combining full name for OS + Version
);

module.exports = mongoose.model('OS', OSSchema);