angular.module('test', ['ionic', 'ngCordova'])

.run(function($ionicPlatform, $cordovaMedia) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});


.controller('AudioCtrl',function($scope, $ionicPlatform, $cordovaMedia) {
        $scope.play = function () {
            var src = "/android_asset/www/audio/muzik.mp3";
            var media = $cordovaMedia.newMedia(src).then(function() {
                media.play();
            }, function () {
                // error
            });
       }
 });
