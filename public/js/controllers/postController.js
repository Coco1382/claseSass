// define our app and dependencies (remember to include firebase!)
var app = angular.module("sampleApp", ["firebase"]);

// this factory returns a synchronized array of chat messages
app.factory("chatMessages", ["$firebaseArray",
  function($firebaseArray) {
    // create a reference to the Firebase where we will store our data
    var randomRoomId = Math.round(Math.random() * 100000000);
    var ref = new Firebase("https://sizzling-heat-7126.firebaseio.com/" + randomRoomId);

    // this uses AngularFire to create the synchronized array
    return $firebaseArray(ref);
  }
]);

app.controller("postController", ["$scope", "chatMessages",
  // we pass our new chatMessages factory into the controller
  function($scope, chatMessages) {
    $scope.user = "Coco " + Math.round(Math.random() * 100);

    // we add chatMessages array to the scope to be used in our ng-repeat
    $scope.messages = chatMessages;

    // a method to create new messages; called by ng-submit
    $scope.addMessage = function() {
      // calling $add on a synchronized array is like Array.push(),
      // except that it saves the changes to Firebase!
      $scope.messages.$add({
        from: $scope.user,
        content: $scope.message
      });

      // reset the message input
      $scope.message = "";
    };

    // if the messages are empty, add something for fun!
    $scope.messages.$loaded(function() {
      if ($scope.messages.length === 0) {
        $scope.messages.$add({
          from: "Firebase Docs",
          content: "Hello world!"
        });
      }
    });
  }
]);

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