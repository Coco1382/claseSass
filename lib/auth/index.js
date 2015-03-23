var fs = require('fs');

var auserList = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));

exports.validateUser = function(user, pass) {
	var exists = false;
	
	auserList.forEach(function(aUser) {
		if(aUser.nickname === user && aUser.password == pass){
			exists = true;
		}
	});
	
	return exists;
};


exports.getUser = function(user) {
	var myUser = {};

	myUser.name = user = typeof user !== 'undefined' ? user : 'guest';

	if(user === 'guest'){
		
		return myUser;
			
	}
	else {
		
		myUser.logged = 'logged';
		return myUser;
	}
};