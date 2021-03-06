phonecatControllers.controller('FriendListCtrl', function ($scope, $http,$rootScope) {
	$scope.favlistBool = true;
	$scope.contBool = false;
	$scope.searBool = false;
	$scope.users = [{firstName: "Mohamed",lastName: "Mokhtari"},{firstName: "Valentin",lastName: "Vieren"}];
  $scope.potentialUsers = [{firstName: "Frank",lastName: "Bassard"},{firstName: "Mock",lastName: "Test"}];
// Labels : English
  var engLabels = {
    back : "Back",
    titlePage : "Add friends",
    favoriteList : "My favorite",
    potentialList : "Potential List",
    search : "Search Friends",
    placeholder : "Search"

  },
  // Labels : French
  frLabels = {
    back : "Retour",
    titlePage : "Ajouter des amis",
    favoriteList : "Mes favoris",
    potentialList : "Amis potentiels",
    search : "Retrouve tes amis",
    placeholder : "Rechercher"
  };

  // Setting the language
	if($rootScope.language === "fr")
		$scope.labels = frLabels;
	else 
		$scope.labels = engLabels;



 $scope.favorisBool = function(){
    $scope.favlistBool = true;
	$scope.contBool = false;
	$scope.searBool = false;
  }

 $scope.contactBool = function(){
    $scope.favlistBool = false;
	$scope.contBool = true;
	$scope.searBool = false;
  }

   $scope.searchBool = function(){
    $scope.favlistBool = false;
	$scope.contBool = false;
	$scope.searBool = true;
  }



});

