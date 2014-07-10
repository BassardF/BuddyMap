/*
* Controller of the login page
*/
phonecatControllers.controller('LoginCtrl', function ($scope, $location, $rootScope, storage) {
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
      $rootScope.user = user;
      $location.path('/home');
    }
  });

  // Attempt to log in or register
  $scope.next = function(){
    if(typeof $scope.email !== 'undefined'){
      $rootScope.email = $scope.email;
      $location.path('/login2');
    } else {
      alert($scope.labels.mailAlert);
    }
  };

});
