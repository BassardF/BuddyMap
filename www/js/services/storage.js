/*
* Storage service
*/
phonecatControllers.service('storage', [function() {

	 	this.database = null;

    this.loadDatabase = function(){
				console.log("trying to create db");
        if(this.database === null) this.database = window.openDatabase("BuddyMap", "1.0", "BuddyMap Database", 2000000)
    }

    this.storeUser = function(){
        this.loadDatabase();
        function successCB() {
				  alert("success!");
				}
        function errorCB(err) {
				  console.log("Error processing SQL: ", err.message);
				}
        function trans(tx){
						tx.executeSql("DROP TABLE IF EXISTS 'user'");
            tx.executeSql("CREATE TABLE user(pseudo VARCHAR(255), mail VARCHAR(255), pwd VARCHAR(255), phone VARCHAR(255))");
						tx.executeSql("INSERT INTO user VALUES ('Myrulz89','f.bassard@gmail.com', 'pwd','0650215699')");
        }
        this.database.transaction(trans, errorCB, successCB);
    }

    this.retrieveUser = function(callback){
        this.loadDatabase();
        function errorCB(err) {
				  console.log("Error processing SQL: ", err.message);
				}
				function querySuccess(tx, results) {
					console.log("Returned rows = " + results.rows.length);
					if (!results.rowsAffected) {
					  console.log('No rows affected!');
					  return false;
					}
				console.log("Last inserted row ID = " + results.insertId);
				}

        function trans(tx){
            tx.executeSql('SELECT * FROM user', [], querySuccess, errorCB);
        }
        this.database.transaction(trans, errorCB);
    }
}]);
