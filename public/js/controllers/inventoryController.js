APP.controller('inventoryController', function($scope, $firebaseArray) {
	var ref = new Firebase('https://mystuffproject.firebaseio.com/dinamovera');
	$scope.inventory = $firebaseArray(ref);
});