// Controller's module
var phonecatControllers = angular.module('phonecatControllers', []);

// Global autofocus directive
phonecatControllers.directive('focus',
  function($timeout) {
    return {
      scope : {
        trigger : '@focus'
      },
      link : function(scope, element) {
        scope.$watch('trigger', function(value) {
          if (value === "true") {
            $timeout(function() {
              element[0].focus();
            });
          }
        });
      }
    };
  }
);

// Routing module
var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers'
]);

phonecatApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      }).
      when('/login2', {
        templateUrl: 'partials/login2.html',
        controller: 'LoginCtrl2'
      }).
      when('/login3', {
        templateUrl: 'partials/login3.html',
        controller: 'LoginCtrl3'
      }).
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/register', {
        templateUrl: 'partials/register.html',
        controller: 'RegisterCtrl'
      }).
      when('/create', {
        templateUrl: 'partials/create.html',
        controller: 'CreateCtrl'
      }).
      when('/eventdetails', {
        templateUrl: 'partials/eventdetails.html',
        controller: 'EventDetailsCtrl'
      }).
      when('/facebookregister', {
        templateUrl: 'partials/facebookregister.html',
        controller: 'FacebookRegisterCtrl'
      }).
      when('/invite', {
        templateUrl: 'partials/invite.html',
        controller: 'InviteCtrl'
      }).
       when('/map', {
        templateUrl: 'partials/map.html',
        controller: 'MapCtrl'
      }).
       when('/settings', {
        templateUrl: 'partials/settings.html',
        controller: 'SettingsCtrl'
      }).
      when('/friendList', {
        templateUrl: 'partials/friendList.html',
        controller: 'FriendListCtrl'
      }).
      otherwise({
        redirectTo: '/login'
      });
  }]);
