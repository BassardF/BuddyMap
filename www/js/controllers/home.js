phonecatControllers.controller('HomeCtrl', function ($rootScope, $scope, event, user, storage) {

		// Labels : English
	  var engLabels = {
			events : "Events"
	  },

	  // Labels : French
	  frLabels = {
			events : "Evènements"
	  };

	  // Setting the language
	  if($rootScope.language === "fr")
	    $scope.labels = frLabels;
	  else
	    $scope.labels = engLabels;

		$scope.events = [];

		$scope.init = function(){
			$scope.email = $rootScope.user.email;
			$scope.token = $rootScope.user.token;
			user.userInfo($scope.email, $scope.token);
		};

		$scope.fillHomePage = function(data){
			for(var i=0; i<data.length; i++){
				var actual = data[i];
				var event = {
					parity : i%2,
					day : actual.date,
					date : "",
					count : actual.guestList.length,
					name : actual.authorPseudo,
					content : actual.details,
					tags : ""
				}
				$scope.events.push(event);
			}
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
				$scope.fillHomePage(response);
			}else{
				alert();
			}
		});
});
