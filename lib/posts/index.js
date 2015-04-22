var auth = require(__base+"lib/auth");

exports.config = function(user) {
	
	return {
		title:'Wall',
		postsController: 'postsController',
		user: auth.getUser(user)
	}
}
