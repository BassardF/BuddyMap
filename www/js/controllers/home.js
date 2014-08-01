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

		$scope.fillHomePage = function(data){
			alert("ok");
		};

		$scope.$on('userInfo', function(events, response){
			if(response){
				storage.storeUser(response, $scope.token);
				$scope.idUser = response.id;
				event.retrieveEvents($scope.idUser, $scope.email, $scope.token);
			}else{
				alert();
			}
		});

		$scope.$on('eventsOfUser', function(events, response){
			if(response){
				alert("event");
				$scope.fillHomePage();
			}else{
				alert();
			}
		});
});
