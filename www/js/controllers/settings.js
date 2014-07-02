/*
* Controller of the settings page
*/
phonecatControllers.controller('SettingsCtrl', function ($scope, $http, $location, $rootScope, user) {
	// Labels : English
	var engLabels = {
	    logout : "Log out",
	    showProfileBlock : "Profile",
	    showPwdBlock : "Password",
		showPictureBlock : "Picture",
        manageFriends : "Manage friends",
	    profileMail : "Email address",
	    profileNickname : "Name",
	    profilePhone : "Phone number",
	    profileAddress : "Address",
	    updateProfile : "Update",
	    updatePwd : "Update",
	    logOutConfirm : "Do you want to log out ?",
	    passwordOld : "Actual password",
	    password1 : "New password",
    	password2 : "Confirm",
    	matchingPwdError : "Confirmation should be equal to your new password"
	},
	// Labels : French
	frLabels = {
    	logout : "Se déconnecter",
    	showProfileBlock : "Modifier vos informations",
    	showPwdBlock : "Modifier votre mot de passe",
        manageFriends : "Liste d'amis",
    	showPictureBlock : "Photo de profile",
    	profileMail : "Adresse email",
	    profileNickname : "Pseudo",
    	updateProfile : "Mettre à jour",
    	profilePhone : "numéro de téléphone",
    	profileAddress : "Adresse",
    	updatePwd : "Mettre à jour",
    	logOutConfirm : "Voulez vous vous déconnecter ?",
    	passwordOld : "Mot de passe actuel",
    	password1 : "Nouveau mot de passe",
    	password2 : "Confirmation",
    	matchingPwdError : "Le champ confirmation doit être équivalent à votre nouveau mot de passe."
	};

	// Setting the language
	if($rootScope.language === "fr")
		$scope.labels = frLabels;
	else 
		$scope.labels = engLabels;

	// Setting the context when the page init
	$scope.init = function(){
		if($rootScope.user){
			$scope.profileMail = $rootScope.user.mail;
			$scope.profileNickname = $rootScope.user.pseudo;
			$scope.profilePhone = $rootScope.user.phone;
		}
	}

	/*
	* Disconnect the current user
	* Logging out
	*/
	$scope.disconnect = function(){
		if(confirm($scope.labels.logOutConfirm)){
			user.logOut();
		}
	}

	//Access to the modify profile panel
	$scope.showModifyProfileBlock = function(){
		$scope.showProfileForm = !$scope.showProfileForm;
		$scope.showPwdForm = false;
		if($scope.showProfileForm){
			$scope.settingsProfileBackground = 'settings-darkBackground';
		} else {
			$scope.settingsProfileBackground = '';			
		}
		$scope.settingsPwdBackground = '';
	}

	//Access to the modify password panel
	$scope.showModifyPwdBlock = function(){
		$scope.showPwdForm = !$scope.showPwdForm;
		$scope.showProfileForm = false;
		if($scope.showPwdForm){
			$scope.settingsPwdBackground = 'settings-darkBackground';
		} else {
			$scope.settingsPwdBackground = '';			
		}
		$scope.settingsProfileBackground = '';
	}

	/*
	* Update basic infos
	*/
	$scope.updateProfile = function(){
		user.updateProfile($http, $rootScope.user.id, $scope.profileNickname, $scope.profileMail, $scope.profilePhone, $scope.profileAddress);
	}

	/*
	* Update the password
	*/
	$scope.updatePwd = function(){
		if($scope.profilePwd1 === $scope.profilePwd2){
			user.updatePwd($http, $rootScope.user.id, $scope.profilePwd1, $scope.profilePwd2);
		} else {
			alert($scope.labels.matchingPwdError);
		}
	}
});
