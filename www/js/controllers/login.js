/*
* Controller of the login page
*/
phonecatControllers.controller('LoginCtrl', function ($scope, $http, $location, $rootScope, user, facebook, location) {
  // Labels : English
  var engLabels = {
    appName : "BuddyMap",
    appSub : "Meetings, made easy.",
    login : "Log in",
    loginSub : "Already member of the club ?",
    loginMailLabel : "E-mail or Login",
    loginPasswordLabel : "Password",
    loginValidate : "Log in",
    register : "Register",
    registerSub : "Join us",
    facebook : "Facebook",
    facebookSub  : "Login, the easy way",
    facebookMail : "Email",
    facebookPassword  : "Password",
    facebookValidate : "Log in"
  },
  // Labels : French
  frLabels = {
    appName : "BuddyMap",
    appSub : "Le rendez-vous, simple.",
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
  * Checking if the user is known in the localStorage
  * If he is, upload his datas in the rootscope and redirect to the home
  */
  $scope.init = function(){
    if(user.isUserInLocalStorage()) $scope.logIn = true;
    location.geocode('11 rue laetitia, Rueil-Malmaison');
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
    user.logIn($scope.loginMail, $scope.loginPassword);
  }

  /*
  * Catch the logging event, triggered by the user service
  */
  $scope.$on('userLoggedIn', function(event, user){
    if(Modernizr.localstorage) {
      localStorage.setItem("user", JSON.stringify(user));         
    }
    $rootScope.user = user;
    $scope.logIn = true;
  });


  //Submit the facebook form
  $scope.facebookLogin = function(){
    
  }
});
