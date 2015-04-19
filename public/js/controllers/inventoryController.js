APP.controller('inventoryController', function($scope, $firebaseArray) {

	$scope.$watchGroup(['user', 'secret'], function(){

    	var ref = new Firebase("https://ucreativaeduardo.firebaseio.com/"+$scope.user);

        ref.authWithCustomToken($scope.secret, function(error, authData) {
			if (error) {
		    	console.log("Login Failed!", error);
		  	} else {
		    	$scope.inventory = $firebaseArray(ref);
		    	console.log($scope.inventory);
			}
		});

   	});
});