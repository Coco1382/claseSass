APP.controller('postsController', function($scope, $firebaseArray) {

	//$scope.universidad = 'creativa';

	$scope.$watchGroup(['user', 'secret'], function(){

		var url = "https://ucreativa1.firebaseio.com/" + $scope.user,
				ref = new Firebase(url);
				//obj = $firebaseObject(ref);

		//console.log(obj);

		ref.authWithCustomToken($scope.secret, function(error, authData) {
			if (error) {
				console.log("Login Failed!", error);
			} else {
				var list = $firebaseArray(ref);
				$scope.posts = list;

				$scope.removeItem = function (index) {
					//console.log(ref);
					// Funciona pero hay que hacer un objeto nuevo de Firebase
					//var itemRef = new Firebase(url + '/' + id);
					//itemRef.remove();

					//obj.$remove(id); <-- remueve todos los datos UPSSS
					var item = list[index];
					list.$remove(item).then(function(ref) {
						ref.key() === item.$id; // true
					});
				};

				$scope.createItem = function () {
					if ($scope.postTitle && $scope.postDescription && $scope.postImage ) {
						ref.push({'img': $scope.postImage, 'newsBody': $scope.postDescription, 'title': $scope.postTitle});
						$scope.postImage = '';
						$scope.postDescription = '';
						$scope.postTitle = '';
					}
				};

				$scope.editItem = function (index) {
					var item = list[index];
					console.log(item);
					$scope.postIndex = index;
					$scope.postTitle2 = item.title;
					$scope.postDescription2 = item.newsBody;
					$scope.postImage2 = item.img;
					$scope.showEditForm = true;
				}

				$scope.saveItem = function (index) {
					list[index].title = $scope.postTitle2;
					list[index].newsBody = $scope.postDescription2;
					list[index].img = $scope.postImage2;
					list.$save(index).then(function(ref) {
						ref.key() === list[index].$id; // true
					});
					$scope.postTitle2 = '';
					$scope.postDescription2 = '';
					$scope.postImage2 = '';
					$scope.showEditForm = false;

					//$scope.postTitle2 = "funcionando el save";


				}




			}
		});

	});
});