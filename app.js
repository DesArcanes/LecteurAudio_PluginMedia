// angular.module is a global place for creating, registering and retrieving Angular modules
// 'test' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('test', ['ionic', 'ngCordova'])

.run(function($ionicPlatform, $cordovaMedia) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.controller('AudioCtrl', function($scope, $cordovaMedia) {
	
	var src = "/android_asset/www/audio/muzik.mp3";
    var media = $cordovaMedia.newMedia(src);
    
    
    $scope.play = function(src) {
		media.play();
   }

   $scope.pause = function() {
       media.pause();
   }
   
   $scope.stop = function() {
       media.stop();
   }

})



module.controller('MyCtrl', function($scope, $cordovaMedia) {

  var src = "/src/audio.mp3";
  var media = $cordovaMedia.newMedia(src);

  media.play(); // Android

  media.pause();

  media.stop();

  media.release();

  media.seekTo(5000); // milliseconds value

  media.setVolume(0.5);

  media.startRecord();

  media.stopRecord();

  // media.getDuration(media); not working yet

  // media.getCurrentPosition().then(...); not working yet
});




