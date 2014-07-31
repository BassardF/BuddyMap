/*
* Storage service
*/
phonecatControllers.service('storage', [ '$rootScope', function($rootScope) {

	 	this.database = null;

    this.loadDatabase = function(){
        if(this.database === null) this.database = window.openDatabase("BuddyMap", "1.0", "BuddyMap Database", 2000000)
    }

    this.storeUser = function(user, token){

        this.loadDatabase();

        function successCB() {
				}

        function errorCB(err) {
				}

        function trans(tx){
						tx.executeSql("DROP TABLE IF EXISTS 'user'");
            tx.executeSql("CREATE TABLE user(id VARCHAR(255), token VARCHAR(255), currentLatitude FLOAT(255), currentLongitude FLOAT(255), friendsList VARCHAR(255), houseLatitude FLOAT(255), houseLongitude FLOAT(255), lastRefresh VARCHAR(255), mail VARCHAR(255), password VARCHAR(255), phone VARCHAR(255), pseudo VARCHAR(255))");
						tx.executeSql("INSERT INTO user VALUES ('"+user.id+"','"+token+"','"+user.currentLatitude+"','"+user.currentLongitude+"','"+ JSON.stringify(user.friendsList)+"','"+ user.houseLatitude + "','"+ user.houseLongitude +"','"+ user.lastRefresh +"','"+ user.mail +"','"+ user.password +"','"+ user.phone +"','"+ user.pseudo +"')");
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
