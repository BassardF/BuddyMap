/*
* Controller of the login3 page
*/
phonecatControllers.controller('LoginCtrl3', function ($scope, $location, $rootScope, user) {
  // Labels : English
  var engLabels = {
    explain : "Subscribe or register with email",
    placeholder : "Nickname",
    next : "Next",
    back : "Back",
    nickeNameAlert : "Filling your nickname is required",
    registrationError : "Unable to create your account, try again",
    registrationConflictError : "This account already exists !",
    loginError : "Your account has been created but login failed, try to connect"
  },
  // Labels : French
  frLabels = {
    explain : "Inscrit ou connecte toi avec l'email",
    placeholder : "Pseudo",
    next : "Suivant",
    back : "prÃ©cÃ©dent",
    nickeNameAlert : "Votre pseudo est manquant",
    registrationError : "Une erreur est survenue pendant la création de votre compte, veuillez réessayer",
    registrationConflictError : "Ce compte existe déjà !",
    loginError : "Votre compte a été créé mais une erreur est survenue lors de votre connexion, veuillez vous connecter"
  };

  // Setting the language
  if($rootScope.language === "fr")
    $scope.labels = frLabels;
  else 
    $scope.labels = engLabels;

  $scope.email = $rootScope.user.email;
  $scope.password = $rootScope.user.password;

  $scope.back = function(){
    $location.path('/login2');
  }
  
  $scope.$on('logIn', function(event, loginObj){
		 if(loginObj.logIn){
			 delete $rootScope.user.password; 
			 delete $scope.password;
			 $rootScope.user.token = loginObj.token;
			 $location.path('/home');
		 }else{
			 alert($scope.labels.loginError);
			 $location.path('/login');
		 }
  });

  $scope.$on('register', function(event, register){
	  if(register.isRegistered){
		  user.logIn(register.user.mail, register.user.password);
	  }else{
		  if(register.status === 409){
			  alert($scope.labels.registrationConflictError);
			  $location.path('/login');
		  }else{
			  alert($scope.labels.registrationError);	
		  }
	  }
	 
  });
  
  $scope.next = function(){
    if(typeof $scope.nickname !== 'undefined'){
      user.register($scope.email, $scope.password, $scope.nickname);
    } else{
      alert($scope.labels.nickeNameAlert);
    }
  }
});