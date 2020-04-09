/**
 * Főoldalt meglátogatva átirányít
 *  nem vagy bejelntkezve : /login
 *  bejelentkezve : /user
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        return res.redirect('/login');
    };
};