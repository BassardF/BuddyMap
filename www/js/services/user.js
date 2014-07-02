/*
* User service
* CRUD and basic tools
*/
phonecatControllers.service('user', ['$http', '$rootScope', '$location', function($http, $rootScope, $location) {

	/*
	* Test if a user is in the storage
	* If there is : push him into the give scope and return true
	*/
	this.isUserInStorage = function(){

	}

	/*
	* Log in the user
	* broadcast result
	*/
	this.logIn = function(mailOrNickname, password){
		var config = {
	    	method : "Get",
	    	url : "mock/loginMock.json",
	    	params : {
		    	login : mailOrNickname,
		     	pwd : password
	    	}
	    };
	    $http(config).success(function(data) {	    	
	    	//Broadcast the 'userLoggedIn' event	
    		$rootScope.$broadcast('userLoggedIn', data); 
	    });
	}

	/*
	* Log out the current user
	* clean the given scope & the storage
	*/
	this.logOut = function(){
	}

	/*
	* Register a new user
	*/
	this.register = function(mail, pseudo, currentLatitude, currentLongitude, houseLatitude, houseLongitude, pwd){
		var config = {
	    	method : "POST",
	    	url : "mock/users",
	    	params : {
		    	"mail" : mail,
			    "pseudo" : pseudo,
			    "currentLatitude" : currentLatitude,
			    "currentLongitude" : currentLongitude,
			    "houseLatitude" : houseLatitude,
			    "houseLongitude" : houseLongitude,
			    "lastRefresh" : null,
			    "pwd" : pwd,
			    timestamp : Date.now()
	    	}
	    };
	    $http(config).success(function(data) {

	    });
	}

	/*
	* Delete a user's account
	*/
	this.delete = function(id, mailOrNickname, password){
		var config = {
	    	method : "DELETE",
	    	url : "mock/.../id",
	    	params : {
		    	login : mailOrNickname,
		     	pwd : password
	    	}
	    };
	    $http(config).success(function(data) {

	    });
	}

	/*
	* Update basic info of an account
	*/
	this.updateProfile = function(id, pseudo, mail, phone, address){
		var config = {
	    	method : "PUT",
	    	url : "mock/.../id",
	    	params : {
		    	pseudo : pseudo,
		     	mail : mail,
		     	phone : phone,
		     	address : address,
	    	}
	    };
	    $http(config).success(function(data) {

	    });
	}

	/*
	* Update a user's password
	*/
	this.updatePwd = function(id, oldPwd, newPwd){
		var config = {
	    	method : "Put",
	    	url : "mock/.../id",
	    	params : {
		    	oldPwd : oldPwd,
		     	newPwd : newPwd
	    	}
	    };
	    $http(config).success(function(data) {

	    });
	}
}]);