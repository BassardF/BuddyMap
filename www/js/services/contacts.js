/*
* Contacts service
*/
phonecatControllers.service('contacts', [function() {

	function onSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            console.log("Display Name = " + contacts[i].displayName);
        }
    }

    function onError(contactError) {
        alert('onError!');
    }

	this.getAllContacts = function(callback){
        var options = new ContactFindOptions();
        var fields = ["name", "phoneNumbers", "emails"];
        navigator.contacts.find(fields, onSuccess, onError, options);
	}
}]);
