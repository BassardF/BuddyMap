/*
* User service; CRUD and basic tools
*/
phonecatControllers.service('user', [function(login, password) {

	/*
	* Test if a user is in the LocalStorage
	* If there is : pushing him into the give scope and return true
	*/
	this.isUserInLocalStorage = function(scope){
		if (Modernizr.localstorage) {
	      var user = JSON.parse(localStorage.getItem("user"));
	      if(user){
	      	scope.user = user;
	        return true;
	      }
	    }
	    return false;
	}

	/*
	* Log in the user
	* if the credentials are ok
	* put the user in the localStorage & the given scope
	*/
	this.logIn = function(http, callback, mailOrNickname, password){
		var config = {
	    	method : "Get",
	    	url : "mock/loginMock.json",
	    	params : {
	    	login : mailOrNickname,
	     	password : password
	    	}
	    };
	    http(config).success(function(data) {
	    	callback(data);
	    	if (Modernizr.localstorage) {
	    		localStorage.setItem("user", JSON.stringify(data));	    		
	    	}
	    });
	}

	/*
	* Log out the current user
	* clean the given scope & the localStorage
	*/
	this.logOut = function(scope, location){		
		if (Modernizr.localstorage) {
			localStorage.clear();			
		}
		if(scope.user){
			scope.user = null;
		}
		location.path("/login");
	}

	this.register = function(){

	}

	this.delete = function(mailOrNickname, password){

	}
}]);