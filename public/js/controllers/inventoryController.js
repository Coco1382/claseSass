APP.controller('inventoryController', function($scope, $firebaseArray) {

	$scope.$watchGroup(['user', 'secret'], function(){

    	var ref = new Firebase("https://sizzling-heat-7126.firebaseio.com/"+$scope.user);

        ref.authWithCustomToken($scope.secret, function(error, authData) {
			if (error) {
		    	console.log("Login Failed!", error);
		  	} else {
		    	$scope.inventory = $firebaseArray(ref);
			}
		});

		$scope.remove = function(id){
			var fb = new Firebase("https://sizzling-heat-7126.firebaseio.com/"+$scope.user+"/"+id);
			fb.remove();

		};

   	});


});