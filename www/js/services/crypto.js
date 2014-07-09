/*
* Crypto service
*/
phonecatControllers.service('crypto', [ function() {

  var seed = 'Fmjtd%7Cluur2g0t2g%2C2l%3Do5-9atxd4';

  this.hash = function(input){
    return CryptoJS.HmacSHA256(input, seed);
  }

}]);
