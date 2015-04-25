var auth = require(__base+"lib/auth");

exports.config = function(user) {
	
	return {
		title:'Inventory',
		inventoryController: 'inventoryController',
		user: auth.getUser(user),
	}
}