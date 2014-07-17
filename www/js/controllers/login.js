/*
* Controller of the login page
*/
phonecatControllers.controller('LoginCtrl', function ($location, $scope, $rootScope, storage, user) {
  // Labels : English
  var engLabels = {
    explain : "Subscribe or register to start using BuddyMap",
    placeholder : "Email address",
    next : "Next",
    mailAlert : "Your mail appears to be invalid"
  },
  // Labels : French
  frLabels = {
    explain : "Inscrit ou connecte toi pour commencer à utiliser BuddyMap",
    placeholder : "Adresse mail",
    next : "Suivant",
    mailAlert : "Adresse email invalide"
  };

  // Setting the language
  if($rootScope.language === "fr")
    $scope.labels = frLabels;
  else
    $scope.labels = engLabels;

  $scope.init = function(){
    storage.retrieveUser();
  }

  $scope.$on('retrieveUser', function(event, user) {
    if(Object.keys(user).length !== 0){
    	$scope.$apply(function() {
    		$scope.user = user;
    	    $location.path('/home');
        });
    }
  });
  
  $scope.$on('mailExists', function(event, exist){
	  if(exist){
		  $rootScope.isLoginMode = true;
	  }else{
		  $rootScope.isLoginMode = false;
	  }
	  $location.path('/login2');
  });

  // Attempt to log in or register
  $scope.next = function(){
    if(typeof $scope.email !== 'undefined'){
        $rootScope.email = $scope.email;
    	user.mailExists($scope.email);
    } else {
      alert($scope.labels.mailAlert);
    }
  };

});
