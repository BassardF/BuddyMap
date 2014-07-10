/*
* Controller of the login2 page
*/
phonecatControllers.controller('LoginCtrl2', function ($scope, $rootScope, $location, user) {
  // Labels : English
  var engLabels = {
    explain : "Subscribe or register with email",
    placeholder : "Password",
    next : "Next",
    back : "Back",
    passwordAlert : "Your password must have more than 6 characters"
  },
  // Labels : French
  frLabels = {
    explain : "Inscrit ou connecte toi avec l'email",
    placeholder : "Mot de passe",
    next : "Suivant",
    back : "précédent",
    passwordAlert : "Mot de passe invalide"
  };

  // Setting the language
  if($rootScope.language === "fr")
    $scope.labels = frLabels;
  else
    $scope.labels = engLabels;

  $scope.init = function(){
    // get the mail from the rootscope
    $scope.email = $rootScope.email;
  }


  $scope.back = function(){
    $location.path('/login');
  }

  $scope.next = function(){
    if(typeof $scope.password !== 'undefined'){
      $rootScope.password = $scope.password;
      user.logIn($scope.email, $scope.password);
    } else {
      alert($scope.labels.passwordAlert);
    }
  }

});
