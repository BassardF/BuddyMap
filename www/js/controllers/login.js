/*
* Controller of the login page
*/
phonecatControllers.controller('LoginCtrl', function ($scope, $http, $location, $rootScope, user, facebook) {
  // Labels : English
  var engLabels = {
    login : "Log in",
    loginSub : "Already member ?",
    loginMailLabel : "E-mail or Login",
    loginPasswordLabel : "Password",
    loginValidate : "Log in",
    register : "Register",
    registerSub : "Create your account",
    facebook : "Facebook",
    facebookSub  : "Register made easy",
    facebookMail : "Email",
    facebookPassword  : "Password",
    facebookValidate : "Log in / Register"
  },
  // Labels : French
  frLabels = {
    login : "Connexion",
    loginSub : "Déjà membre ?",
    loginMailLabel : "E-mail ou Pseudo",
    loginPasswordLabel : "Mot de passe",
    loginValidate : "Se connecter",
    register : "Enregistrement",
    registerSub : "Créez votre compte",
    facebook : "Facebook",
    facebookSub  : "Enregistrement simple",
    facebookMail : "E-mail",
    facebookPassword  : "Mot de passe",
    facebookValidate : "Connexion / Enregistrement"
  };

  if($rootScope.language === "fr")
    $scope.labels = frLabels;
  else 
    $scope.labels = engLabels;

  /*
  * Checking if the user is known in the localStorage
  * If he is, upload his datas in the rootscope and redirect to the home
  */
  $scope.init = function(){
    if(user.isUserInLocalStorage($rootScope)){
      $location.path("/home");
    }
  }

  //Access to the basic login form
  $scope.loginClick = function(){
    $scope.showLoginForm = !$scope.showLoginForm;
    $scope.showFacebookForm = false;
    if($scope.showLoginForm){
      $scope.loginBackground = "login-darkBackground";
    } else{
      $scope.loginBackground = "";
    }
    $scope.facebookBackground = "";
  }

  //Redirect to the register page
  $scope.registerClick = function(){
    $location.path("/register");
  }

  //Access to the facebook login/register form
  $scope.facebookClick = function(){
    $scope.showLoginForm = false;
    $scope.showFacebookForm = !$scope.showFacebookForm;
    if($scope.showFacebookForm){
      $scope.facebookBackground = "login-darkBackground";
    } else{
      $scope.facebookBackground = "";
    }
    $scope.loginBackground = "";
  }

  //Submit the basic login form
  $scope.basicLogin = function(){
    user.logIn($http, function(data){
      $rootScope.user = data;
      $location.path("/home");
    }, $scope.loginMail, $scope.loginPassword);
  }

  //Submit the facebook form
  $scope.facebookLogin = function(){
    
  }
});
