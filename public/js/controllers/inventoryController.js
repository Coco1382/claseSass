APP.controller('inventoryController', function($scope, $firebaseArray) {

	$scope.$watchGroup(['user', 'secret'], function(){

    	var ref = new Firebase('https://ucreativaeduardo.firebaseio.com/'+$scope.user);

        ref.authWithCustomToken($scope.secret, function(error, authData) {
			if (error) {
		    	console.log("Login Failed!", error);
		  	} else {
		    	$scope.inventory = $firebaseArray(ref);
			}
		});

		$scope.remove = function(id){
			var ref = new Firebase('https://ucreativaeduardo.firebaseio.com/'+$scope.user+'/'+id);
			ref.remove();
		};

		$scope.add = function(){
			var id = document.formulario.id.value;
			var brand = document.formulario.brand.value;
			var item = document.formulario.item.value;
			var quantity = document.formulario.quantity.value;

			var ref = new Firebase("https://ucreativaeduardo.firebaseio.com/"+$scope.user+'/'+id);

			var proc = ref.set({ brand: brand, item: item, quantity: quantity });

			$scope.id = '';
			$scope.item = '';
			$scope.brand = '';
			$scope.quantity = '';
		}
   	});
});