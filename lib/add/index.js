var auth = require(__base+"lib/auth");

exports.config = function(user) {
	
	return {
		title:'Add',
		crudController: 'crudController',
		user: auth.getUser(user),
	}
}