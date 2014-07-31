phonecatControllers.controller('HomeCtrl', function ($rootScope, $scope, event, user, storage) {

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
			$scope.email = $rootScope.user.email;
			$scope.token = $rootScope.user.token;
			user.userInfo($scope.email, $scope.token);
		};

		$scope.$on('userInfo', function(event, response){
			if(response){
				alert(response);
				//event.retrieveEvents($scope.email, $scope.token);
			}else{
				alert();
			}
		});
});
