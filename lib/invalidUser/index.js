exports.config = function(user) {
	
	return {
		title:'invalidUser',
		invalidUserController: 'invalidUserController',
		user: user = typeof user !== 'undefined' ? user : 'guest'
	}
}
