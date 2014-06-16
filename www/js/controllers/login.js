phonecatControllers.controller('LoginCtrl', function ($scope) {
  $scope.labels = {
    brand : "Team Up"
  };
  $scope.showFacebookForm = false;
  $scope.showLoginForm = false;

  $scope.loginClick = function(){
    $scope.showLoginForm = true;
    $scope.showFacebookForm = false;
  }

  $scope.facebookClick = function(){
    $scope.showLoginForm = false;
    $scope.showFacebookForm = true;
  }
});
