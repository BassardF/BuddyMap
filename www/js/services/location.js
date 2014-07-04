/*
* Location service
*/
phonecatControllers.service('location', ['$http', function($http) {

	var key = 'Fmjtd%7Cluur2g0t2g%2C2l%3Do5-9atxd4';

	this.geocode = function(location){
		var baseUrl = 'http://open.mapquestapi.com/geocoding/v1/address?key=' + key + '&location=' + location;
		var config = {
	    	method : "GET",
	    	url : baseUrl,
	    	params : {}
	    };
	    $http(config).success(function(data) {
	    	console.log(
					{
						lat : data.results[0].locations[0].latLng.lat,
						lng : data.results[0].locations[0].latLng.lng
					}
				);
	    });
	}

}]);
