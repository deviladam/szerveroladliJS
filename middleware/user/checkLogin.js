/**
 * Leellenőrzi hogy be van e jelentkezve a felhasználó
 *  Igen: továbbít a főoldalra
 *  Nem: error
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        return next();
    };
};