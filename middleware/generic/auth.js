/**
 * Ha a felhasználó nincsen belépve főoladlra irányít
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        return next();
    };
};