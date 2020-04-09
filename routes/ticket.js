module.exports = function (app) {

    var authMW = require('../middleware/generic/auth');
    var renderMW = require('../middleware/generic/render');

    var getTicketsMW = require('../middleware/ticket/getTickets');
    var CheckDataTicketMW = require('../middleware/ticket/CheckDataTicket');
    var BuyTicketMW = require('../middleware/ticket/BuyTicket');

    var objrep = {};

    app.get('/tickets/add',
        authMW(objrep),
        renderMW(objrep,'buyTicket')
    );

    app.post('/tickets/add',
        authMW(objrep),
        CheckDataTicketMW(objrep),
        BuyTicketMW(objrep)
    );

    app.get('/tickets/:id',
        authMW(objrep),
        getTicketsMW(objrep),
        renderMW(objrep,'viewTicket')
    );



};