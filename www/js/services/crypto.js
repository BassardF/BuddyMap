/*
* Crypto service
*/
phonecatControllers.service('crypto', [ function() {

	this.hashAlgorythmUsed = "SHA256";
	
	this.hashSHA256 = function(input, passphrase){
		return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(input, passphrase));
	}

	this.getHashAlgorythmUsed = function(){
		return this.hashAlgorythmUsed;
	}
}]);
