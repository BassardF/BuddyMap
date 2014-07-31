/*
* Event service
*/
phonecatControllers.service('event', ['$http', 'crypto', function($http, crypto) {

	this.baseUrl = 'http://ec2-54-191-70-54.us-west-2.compute.amazonaws.com/buddyMap';

	this.retrieveEvents = function(id, mail, token){
		var clientTimestamp = Date.now();
		var authorizationHeader = {
			"clientTimestamp" : clientTimestamp,
			"mail" : mail,
			"hashSignature" : crypto.hashSHA256(mail + clientTimestamp + crypto.getHashAlgorythmUsed(), token),
			"hashAlgorythm" : "SHA256"
		}
		var config = {
		    	method : "GET",
		    	url : this.baseUrl + "/events?idUser=" + id,
		    	headers : {
		    		"Authorization" : JSON.stringify(authorizationHeader)
		    	}
		    };
		 $http(config).success(function(data) {
			 $rootScope.$broadcast('eventsOfUser', data);
		 }).
		 error(function(data, status, headers, config) {
			 $rootScope.$broadcast('eventsOfUser', false);
		 });
	}
}]);
