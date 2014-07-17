phonecatControllers.controller('HomeCtrl', function ($rootScope, $scope, event) {
	// Labels : English
	  var engLabels = {
	  },
	  // Labels : French
	  frLabels = {
	  };

	  // Setting the language
	  if($rootScope.language === "fr")
	    $scope.labels = frLabels;
	  else
	    $scope.labels = engLabels;
	
	  $scope.init = function(){
		  $scope.mail = $rootScope.user.mail;
		  $scope.nickName = $rootScope.user.pseudo;
		  event.retrieveEvents();
	  }
});
