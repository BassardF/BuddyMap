/*
* Location service
*/
phonecatControllers.service('location', ['$http', function($http) {

	var key = 'Fmjtd%7Cluur2g0t2g%2C2l%3Do5-9atxd4';

	this.geocode = function(location){
		var baseUrl = 'http://www.mapquestapi.com/geocoding/v1/address';
		var config = {
	    	method : "GET",
	    	url : baseUrl,
	    	params : {
		    	key : key,
		     	location : location
	    	}
	    };
	    $http(config).success(function(data) {
	    	console.log(data);
	    });
	}

}]);