module.exports = function (app) {

    var authMW = require('../middleware/generic/auth');
    var renderMW = require('../middleware/generic/render');

    var redirectMW = require('../middleware/generic/redirect');
    var logoutMW = require('../middleware/user/logout');
    var checkLoginMW = require('../middleware/user/checkLogin');

    var objrep = {};

    app.get('/',
        redirectMW(objrep)
    );

    app.use('/login',
        checkLoginMW(objrep),
        renderMW(objrep, 'index')
    );

    app.get('/logout',
        logoutMW(objrep)
    );


};