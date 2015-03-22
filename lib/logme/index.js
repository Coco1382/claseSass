exports.config = function(user) {

	return {
		title:'login',
		user: user = typeof user !== 'undefined' ? user : 'guest'
	}
}
