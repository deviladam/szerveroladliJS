/**
 *  Betölti a megfelelő felhasználó adatait ha létezik
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        return next();
    };
};