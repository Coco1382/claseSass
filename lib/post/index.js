var auth = require(__base+"lib/auth");

exports.config = function(user) {
	
	return {
		title:'post',
		postController: 'postController',
		user: auth.getUser(user)
	}
}