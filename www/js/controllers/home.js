phonecatControllers.controller('HomeCtrl', function ($rootScope, $scope, event, storage) {
	
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
	
	  $scope.email = $rootScope.user.email;
	  $scope.token = $rootScope.user.token;
	  event.retrieveEvents($scope.email, $scope.token);
});
