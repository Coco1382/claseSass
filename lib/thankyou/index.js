exports.config = function(user) {
	
	return {
		title:'thank you',
		thankyouController: 'thankyouController',
		user: user = typeof user !== 'undefined' ? user : 'guest'
	}
}
