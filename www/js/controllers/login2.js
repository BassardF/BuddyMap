/*
* Controller of the login2 page
*/
phonecatControllers.controller('LoginCtrl2', function ($scope, $rootScope, $location, user) {
  // Labels : English
  var engLabels = {
    brand : "BuddyMap",
    explain : "Subscribe or register with email",
    placeholder : "Password",
    next : "Next",
    back : "Back",
    passwordAlert : "Your password must have more than 6 characters",
    wrongPassword : "Incorrect password"
  },
  // Labels : French
  frLabels = {
    brand : "BuddyMap",
    explain : "Inscrit ou connecte toi avec l'email",
    placeholder : "Mot de passe",
    next : "Suivant",
    back : "précédent",
    passwordAlert : "Mot de passe invalide",
    wrongPassword : "Mot de passe incorrect"
  };

  // Setting the language
  if($rootScope.language === "fr")
    $scope.labels = frLabels;
  else
    $scope.labels = engLabels;

  $scope.init = function(){
    // get the mail from the rootscope
    $scope.email = $rootScope.user.email;
  }

  $scope.$on('logIn', function(event, loginObj){
	 if(loginObj.logIn){
		 delete $rootScope.user.password;
		 delete $scope.password;
		 $rootScope.user.token = loginObj.token;
		 $location.path('/home');
	 }else{
		 alert($scope.labels.wrongPassword);
	 }
  });

  $scope.back = function(){
    $location.path('/login');
  }

  $scope.next = function(){
    if(typeof $scope.password !== 'undefined'){
        $rootScope.user.password = $scope.password;
        if($rootScope.isLoginMode){
        	user.logIn($scope.email, $scope.password);
        }else{
        	$location.path("/login3");
        }
    } else {
      alert($scope.labels.passwordAlert);
    }
  }

});
