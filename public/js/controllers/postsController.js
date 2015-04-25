APP.controller('postsController', function($scope, $firebaseArray) {

	$scope.$watchGroup(['user', 'secret'], function(){
		var url = 'https://ucreativa1.firebaseio.com/admin',// + $scope.user,
				ref = new Firebase(url);

		$scope.logged = ($scope.user === 'admin')? true: false;

		$scope.secret = 'lsM0qCJn3YKGw893acn3Wa7TsStKioORelB1cv2h';

		var list = $firebaseArray(ref);
		$scope.posts = list;

			ref.authWithCustomToken($scope.secret, function (error, authData) {
				if (error) {

				} else {

					//Elimina los items

					$scope.removeItem = function (index) {

						var item = list[index];
						list.$remove(item).then(function(ref) {
							ref.key() === item.$id; // true
						});
					};

					//Crea los items

					$scope.createItem = function () {
						if ($scope.postTitle && $scope.postDescription && $scope.postImage ) {
							ref.push({'img': $scope.postImage, 'newsBody': $scope.postDescription, 'title': $scope.postTitle});
							$scope.postImage = '';
							$scope.postDescription = '';
							$scope.postTitle = '';

							$('#createPost').modal('hide');
						}
					};

					//Edita los items

					$scope.editItem = function (index) {
						var item = list[index];
						$scope.postIndex = index;
						$scope.postTitle2 = item.title;
						$scope.postDescription2 = item.newsBody;
						$scope.postImage2 = item.img;
					};

					//Boton que salva los items

					$scope.saveItem = function (index) {
						if (index !== '') {
							list[index].title = $scope.postTitle2;
							list[index].newsBody = $scope.postDescription2;
							list[index].img = $scope.postImage2;
							list.$save(index).then(function(ref) {
								ref.key() === list[index].$id; // true
							});
							$scope.postTitle2 = '';
							$scope.postDescription2 = '';
							$scope.postImage2 = '';

							$('#editPost').modal('hide');
						}
					};

					//Boton que cancela los items

					$scope.cancelBtn = function () {
						$scope.postIndex = '';
						$scope.postTitle2 = '';
						$scope.postDescription2 = '';
						$scope.postImage2 = '';
					};
				}
			});

	});
});