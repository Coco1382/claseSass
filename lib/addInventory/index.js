var auth = require(__base+"lib/auth");

exports.config = function(user) {
	
	return {
		title:'addInventory',
		addInventoryController: 'addInventoryController',
		user: auth.getUser(user)
	}
}