phonecatControllers.controller('SettingsCtrl', function ($scope, $http, $location, $rootScope, user) {
	var engLabels = {
	    logout : "Log out",
	    showProfileBlock : "Modify your profile",
	    showPwdBlock : "Change your password",
	    profileMail : "Email address",
	    profileNickname : "Nickname",
	    updateProfile : "Update",
	    updatePwd : "Update",
	    logOutConfirm : "Do you want to log out ?",
	    passwordOld : "Actual password",
	    password1 : "New password",
    	password2 : "Confirm"
	},
	// Labels : French
	frLabels = {
    	logout : "Se déconnecter",
    	showProfileBlock : "Modifier votre profil",
    	showPwdBlock : "Modifier votre mot de passe",
    	profileMail : "Adresse email",
	    profileNickname : "Pseudo",
    	updateProfile : "Mettre à jour",
    	updatePwd : "Mettre à jour",
    	logOutConfirm : "Voulez vous vous déconnecter ?",
    	passwordOld : "Mot de passe actuel",
    	password1 : "Nouveau mot de passe",
    	password2 : "Confirmation"
	};

	if($rootScope.language === "fr")
		$scope.labels = frLabels;
	else 
		$scope.labels = engLabels;

	$scope.init = function(){
		if($rootScope.user){
			$scope.profileMail = $rootScope.mail;
			$scope.profileNickname = $rootScope.nickname;
		} else if(Modernizr.localstorage){
		  var user = JSON.parse(localStorage.getItem("user"));
	      if(user){
	      	$scope.profileMail = user.mail;
			$scope.profileNickname = user.nickname;
	      }
		}
	}

	$scope.disconnect = function(){
		if(confirm($scope.labels.logOutConfirm)){
			user.logOut($rootScope, $location);
		}
	}

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
});
