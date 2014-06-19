/*
* Controller of the login page
*/
phonecatControllers.controller('LoginCtrl', function ($scope, $http, $location, $rootScope, facebook) {
  $scope.labels = {
    login : "Log in",
    loginSub : "Already member ?",
    loginMailLabel : "Email or Login",
    loginPasswordLabel : "Password",
    loginValidate : "Log in",
    register : "Register",
    registerSub : "Create your account",
    facebook : "Facebook",
    facebookSub  : "Register made easy",
    facebookMail : "Email",
    facebookPassword  : "Password",
    facebookValidate : "Log in / Register"
  };

  /*
  * Checking if the user is known in the localStorage
  * If he is, upload his datas in the rootscope and redirect to the home
  */
  $scope.init = function(){
    if (Modernizr.localstorage) {
      var user = localStorage.getItem("user");
      if(user){
        $rootScope.user = user;
        $location.path("/home");
      }
    }
  }

  //Access to the basic login form
  $scope.loginClick = function(){
    $scope.showLoginForm = !$scope.showLoginForm;
    $scope.showFacebookForm = false;
    if($scope.showLoginForm){
      $scope.loginBackground = "darkBackground";
    } else{
      $scope.loginBackground = "";
    }
    $scope.facebookBackground = "";
  }

  //Redirect to the register page
  $scope.registerClick= function(){
    $location.path("/register");
  }

  //Access to the facebook login/register form
  $scope.facebookClick = function(){
    $scope.showLoginForm = false;
    $scope.showFacebookForm = !$scope.showFacebookForm;
    if($scope.showFacebookForm){
      $scope.facebookBackground = "darkBackground";
    } else{
      $scope.facebookBackground = "";
    }
    $scope.loginBackground = "";
  }

  //Submit the basic login form
  $scope.basicLogin = function(){
    var config = {
      method : "",
      url : "",
      params : {
        login : $scope.loginMail,
        password : $scope.loginPassword
      }
    };
    $http(config).success(function(data) {

    });
  }

  //Submit the facebook form
  $scope.facebookLogin = function(){
    var config = {
      method : "",
      url : "",
      params : {
        login :$scope.facebookMail,
        password : $scope.facebookPassword
      }
    };
    $http(config).success(function(data) {

    });
  }
});
