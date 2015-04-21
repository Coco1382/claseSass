var app = angular.module("sampleApp", ["firebase"]);

// a factory to create a re-usable profile object
// we pass in a username and get back their synchronized data
app.factory("Profile", ["$firebaseObject",
  function($firebaseObject) {
    return function(username) {
      // create a reference to the Firebase where we will store our data
      var randomRoomId = Math.round(Math.random() * 100000000);
      var ref = new Firebase("https://ucreativa02.firebaseio.com/" + randomRoomId);
      var profileRef = ref.child(username);

      // return it as a synchronized object
      return $firebaseObject(profileRef);
    }
  }
]);

app.controller("ProfileCtrl", ["$scope", "Profile",
  function($scope, Profile) {
    // put our profile in the scope for use in DOM
    $scope.profile = Profile("physicsmarie");

    // calling $save() on the synchronized object syncs all data back to Firebase
    $scope.saveProfile = function() {
      $scope.profile.$save().then(function() {
        alert('Profile saved to Firebase!');
      }).catch(function(error) {
        alert('Error!');
      });
    };
  }
]);