exports.config = function(user) {
	
	return {
		title:'about',
		aboutController: 'aboutController',
		user: user = typeof user !== 'undefined' ? user : 'guest'
	}
}