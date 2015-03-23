APP.controller('inventoryController', function($scope, $firebaseArray) {

	$scope.$watch("user", function(){

        var ref = new Firebase("https://mystuffproject.firebaseio.com/"+$scope.user);

		$scope.inventory = $firebaseArray(ref);
    });
	
});