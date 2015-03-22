exports.config = function(user) {
	
	return {
		title:'home',
		homeController: 'homeController',
		user: user = typeof user !== 'undefined' ? user : 'guest'
	}
}