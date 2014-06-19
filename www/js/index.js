var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, true);
    },

    // Bootstraping Angular when the device is ready
    onDeviceReady: function() {
        angular.element(document).ready(function() {
            angular.bootstrap(document);
        });
    },
};
