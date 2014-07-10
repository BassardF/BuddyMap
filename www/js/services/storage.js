/*
* Storage service
*/
phonecatControllers.service('storage', [ '$rootScope', function($rootScope) {

	 	this.database = null;

    this.loadDatabase = function(){
        if(this.database === null) this.database = window.openDatabase("BuddyMap", "1.0", "BuddyMap Database", 2000000)
    }

    this.storeUser = function(mail, password, token){

        this.loadDatabase();

        function successCB() {
				}

        function errorCB(err) {
				}

        function trans(tx){
						tx.executeSql("DROP TABLE IF EXISTS 'user'");
            tx.executeSql("CREATE TABLE user(mail VARCHAR(255), password VARCHAR(255), token VARCHAR(255))");
						tx.executeSql("INSERT INTO user VALUES ('"+mail+"','"+password+"', '"+token+"')");
        }

        this.database.transaction(trans, errorCB, successCB);
    }

    this.retrieveUser = function(){

				this.loadDatabase();

				function errorCB(err) {
					$rootScope.$broadcast('retrieveUser', {});
				}

				function querySuccess(tx, results) {					
					$rootScope.$broadcast('retrieveUser', results.rows.item(0));
				}

        function trans(tx){
            tx.executeSql('SELECT * FROM user', [], querySuccess, errorCB);
        }
        this.database.transaction(trans, errorCB);
    }
}]);
