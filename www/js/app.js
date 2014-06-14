var phonecatControllers = angular.module('phonecatControllers', []);

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers'
]);

phonecatApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/register', {
        templateUrl: 'partials/register.html',
        controller: 'RegisterCtrl'
      }).
      otherwise({
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      });
  }]);
