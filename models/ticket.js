var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Ticket = db.model('Ticket', {
    from: Date,
    to: Date,
    price:Number,
    rodqunatity: {
        type: Number,
        default: 1
    },
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = Ticket;