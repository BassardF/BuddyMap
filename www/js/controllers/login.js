/*
* Controller of the login page
*/
phonecatControllers.controller('LoginCtrl', function ($scope, $http, $location, $rootScope, user, location, camera) {
  // Labels : English
  var engLabels = {
    appName : "BuddyMap",
    appSub : "Meetings, made easy.",
    login : "Log in",
    loginLoginLabel : "Mail",
    loginPasswordLabel : "Password",
    loginValidate : "Log in",
    register : "Register",
    registerMail : "Mail",
    registerPassword : "Password",
    registerValidate : "Register",
    registerName : "Name"
  },
  // Labels : French
  frLabels = {
    appName : "BuddyMap",
    appSub : "Le rendez-vous, simple.",
    login : "Connexion",
    loginLoginLabel : "E-mail",
    loginPasswordLabel : "Mot de passe",
    loginValidate : "Se connecter",
    register : "Enregistrement",
    registerMail : "E-Mail",
    registerPassword : "Mot de passe",
    registerValidate : "Enregistrer",
    registerName : "Nom"
  };

  //Watched token (true if te user is logged in)
  $scope.logIn = false;

  //Picking the language
  if($rootScope.language === "fr") $scope.labels = frLabels;
  else $scope.labels = engLabels;

  /*
  * Checking if the login status change
  * Routing to home if he has successfully logged in
  */
  $scope.$watch('logIn', function() {
    if($scope.logIn === true) $location.path("/settings");
  });

  /*
  * Checking if the user is known in the Storage
  * If he is, upload his datas in the rootscope and redirect to the home
  */
  $scope.init = function(){
    camera.getPhoto();
  }

  //Access to the basic login form
  $scope.loginClick = function(){
    camera.getPhoto();
    $scope.showLoginForm = !$scope.showLoginForm;
    $scope.showRegisterForm = false;
    if($scope.showLoginForm){
      $scope.loginBackground = "login-darkBackground";
    } else{
      $scope.loginBackground = "";
    }
    $scope.registerBackground = "";
  }


  //Access to the register form
  $scope.registerClick = function(){
    $scope.showLoginForm = false;
    $scope.showRegisterForm = !$scope.showRegisterForm;
    if($scope.showRegisterForm){
      $scope.registerBackground = "login-darkBackground";
    } else{
      $scope.registerBackground = "";
    }
    $scope.loginBackground = "";
  }

  //Submit the basic login form
  $scope.basicLogin = function(){
    user.logIn($scope.loginLogin, $scope.loginPassword);
  }

  /*
  * Catch the logging event, triggered by the user service
  */
  $scope.$on('userLoggedIn', function(event, user){
    $rootScope.user = user;
    $scope.logIn = true;
  });
});
