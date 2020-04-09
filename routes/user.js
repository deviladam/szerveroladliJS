module.exports = function (app) {

    var authMW = require('../middleware/generic/auth');
    var renderMW = require('../middleware/generic/render');

    var loadUsersMW = require('../middleware/user/loadUsers');
    var loadUserMW = require('../middleware/user/loadUser');
    var checkUserDataMW = require('../middleware/user/checkUserData');
    var saveUserMW = require('../middleware/user/saveUser');
    var deleteUserMW = require('../middleware/user/deleteUser');

    var objrep = {};

    app.get('/userlist',
        authMW(objrep),
        loadUsersMW(objrep),
        renderMW(objrep));

    app.get('/user/mod/:id',
        authMW(objrep),
        loadUserMW(objrep),
        renderMW(objrep,'options'));

    app.post('/user/mod/:id',
        authMW(objrep),
        loadUserMW(objrep),
        checkUserDataMW(objrep),
        saveUserMW(objrep));


    app.get('/user/del/:id',
        authMW(objrep),
        loadUserMW(objrep),
        deleteUserMW(objrep));

    app.get('/user/reg',
        authMW(objrep),
        renderMW(objrep,'reg'));

    app.post('/user/reg',
        authMW(objrep),
        checkUserDataMW(objrep),
        saveUserMW(objrep));

    app.get('/user',
        authMW(objrep),
        loadUserMW(objrep),
        renderMW(objrep,'user'));
};