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
    var sound_on = false;
    var media = new Media( '/android_asset/www/audio/muzik.mp3');
    $scope.play = function(filename, duration) {undefined> if (sound_on == true) {

      media.stop();
      media.release();
    }

    sound_on = true;
    media = $cordovaMedia.newMedia('/android_asset/www/audio/' + filename + '.mp3');
    media.play();

    $timeout(function(){
         sound_on = false;
         }, duration);

    }
 });
