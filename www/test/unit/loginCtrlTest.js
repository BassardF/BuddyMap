describe('Login controller', function() {
  beforeEach(module('phonecatApp'));

  var ctrl, scope;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('LoginCtrl', {
      $scope: scope
    });
  }));

  it('Should have some labels', 
    function() {
      expect(scope.labels.login).toEqual("Log in");
      expect(scope.labels.login).toBeUndefined();
  });
})