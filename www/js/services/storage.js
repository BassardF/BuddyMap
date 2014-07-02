/*
* Storage service
*/
phonecatControllers.service('storage', [function() {

	var database = null;
    
    this.loadDatabase = function(){
        if(this.database === null) this.database = window.openDatabase("BuddyMap", "1.0", "BuddyMap Database", 2000000)
    }
    
    this.storeUser = function(user){
        this.loadDatabase();
        function success(){};
        function fail(){};
        function trans(tx){
            tx.executeSql('DROP TABLE IF EXISTS DEMO');
        }
        database.transaction(trans, fail, success);
    }
    
    this.retrieveUser = function(callback){
        this.loadDatabase();
        function fail(){};
        function trans(tx){
            tx.executeSql('DROP TABLE IF EXISTS DEMO');
        }
        database.transaction(trans, fail, callback);
    }
}]);