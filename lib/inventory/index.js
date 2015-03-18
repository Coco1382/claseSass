var fs = require('fs');
var inventory = JSON.parse(fs.readFileSync('./data/inventory.json', 'utf8'));


exports.getInventory = function() {
    return inventory;
};