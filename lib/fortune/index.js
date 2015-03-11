var fs = require('fs');
var fortuneCookies = JSON.parse(fs.readFileSync('./data/fortune.json', 'utf8'));


exports.getFortune = function() {
    return fortuneCookies;
};

