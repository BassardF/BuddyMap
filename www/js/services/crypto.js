/*
* Crypto service
*/
phonecatControllers.service('crypto', [ function() {

	this.hashAlgorythmUsed = "SHA256";
	
	this.hashSHA256 = function(input, passphrase){
		return CryptoJS.HmacSHA256(input, passphrase);
	}

	this.getHashAlgorythmUsed = function(){
		return this.hashAlgorythmUsed;
	}
}]);
