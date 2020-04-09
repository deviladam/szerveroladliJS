/**
 * Aktuális adatokat megjeleníteni (megfelelő sablonokhoz TODO)
 */
module.exports = function (objectrepository,viewName) {
    return function (req, res) {
        res.render(viewName, res.tpl);
    };
};