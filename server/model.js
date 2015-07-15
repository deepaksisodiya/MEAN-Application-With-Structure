/**
 * Created by deepak on 12/07/15.
 */


var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name : {
        type : String
    }
});

var exports = module.exports = {};

exports = mongoose.model('Users', UserSchema);