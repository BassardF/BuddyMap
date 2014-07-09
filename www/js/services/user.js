/*
* User service
* CRUD and basic tools
*/
phonecatControllers.service('user', ['$http', '$rootScope', '$location', function($http, $rootScope, $location) {

	this.baseUrl = 'http://ec2-54-191-70-54.us-west-2.compute.amazonaws.com/buddyMap';

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
	this.logIn = function(mail, password){
		var config = {
	    	method : "Get",
	    	url : "mock/loginMock.json",
	    	params : {
		    	mail : mailOrNickname,
		     	password : password,
		     	timestamp : Date.now()
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
	this.register = function(mail, password, pseudo){
		var config = {
	    	method : "POST",
	    	url : this.baseUrl + "/users",
	    	data : {
		    	"mail" : mail,
			    "pseudo" : pseudo,
			    "password" : password,
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