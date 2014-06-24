phonecatControllers.controller('RegisterCtrl', function ($scope, $http) {
  $scope.labels = {
    register : "Register",
    registerSub : "Create your account",
    registerMail : "Email",
    registerPassword : "Password",
    registerConfirmPassword : "Confirm Password",
    registerPseudo : "Pseudo",
    registerValidate : "Log in / Register"
  };


  //check before registration
   $scope.checkRegistration = function(){
   	// Check if user has not been found
   		// Check if password = passwordConfirm
   			// Check if pseudo exist
   			 	//Call registration 
   
  }


  //Submit registration
  $scope.registration = function(){
    var config = {
      method : "",
      url : "",
      params : {
        login : $scope.registerMail,
        password : $scope.registerPassword,
        pseudo   : $scope.registrationPseudo
      }
    };
    $http(config).success(function(data) {
      
    });
  }


});
