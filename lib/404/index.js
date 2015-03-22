exports.config = function(user) {
	
	return {
		title:'404',
		user: user = typeof user !== 'undefined' ? user : 'guest'
	}
}