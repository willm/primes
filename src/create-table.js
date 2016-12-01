const table = require('./templates/table.hbs');

module.exports = function createTable (data) {
    var element = document.createElement('div');
    element.innerHTML = table(data);
    return element;
}
