var auth = require(__base+"lib/auth");

exports.config = function(user) {
	
	return {
		title:'inventory',
		inventoryController: 'inventoryController',
		user: auth.getUser(user),
	}
}

/*var mod = require(__base+"lib/crudDB");

mod.factory('modItem', [
	"$firebase", function($firebase){
		var $db = new Firebase("https://ucreativaeduardo.firebaseio.com/"+user),
		Items = $firebase($db);
		var lengthItem = function(){
			return Items.$getIndex().length;
		}

		return {
			list: function(){
				return Items;
			},
			findItem: function(id){
				return Items.child(id);
			},
			saveItem: function(item){
				if (typeof item.id === "undefined") {
					var index = lengthItem();
					item.id = index+1;
					Items.$add(item);
				}
				else{
					/*var objItem = Items.$child(item.id)
					objItem.update(user);*/
					/*item.update(item);
				}
			},
			deleteItem: function(id){
				Items.$remove(id);
			}
		};
	}
]);*/
