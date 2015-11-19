angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaToast, $cordovaDeviceMotion, $cordovaVibration) {
  $scope.toto = "toto";

document.addEventListener("deviceready", function () {
   $cordovaVibration.vibrate(10000);
  $cordovaToast.show('Here is a message', 'long', 'center')
    .then(function(success) {
      // success
    }, function (error) {
      // error
    });
}, false);


  var options = { frequency: 2000 };

  document.addEventListener("deviceready", function () {


    var watch = $cordovaDeviceMotion.watchAcceleration(options);
    watch.then(
      null,
      function(error) {
      // An error occurred
      },
      function(result) {
        $scope._X = result.x;
        $scope._Y = result.y;
        $scope._Z = result.z;
        var timeStamp = result.timestamp;
    });


    watch.clearWatch();
    // OR
    $cordovaDeviceMotion.clearWatch(watch)
      .then(function(result) {
        // success
        }, function (error) {
        // error
      });

  }, false);


})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  
  console.log('coucou');


  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
