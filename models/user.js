var Schema = require('mongoose').Schema;
var db = require('../config/db');

var User = db.model('User', {
    name: {
        type: String,
        required: true
    },
    email:{
        type: String
    },
    usertype: {
        type: Boolean
    },
    birthdate: {
        type:Date
    },
    password: {
        type:String,
        required: true
    }
});

module.exports = User;