describe('LoginCtrl', function(){
    var scope;
    beforeEach(angular.mock.module('phonecatControllers'));
    beforeEach(angular.mock.module('phonecatApp'));
    beforeEach(angular.mock.inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        $controller('LoginCtrl', {$scope: scope});
    }));

    it('should have a loginPasswordLabel = Password', function(){
        expect(scope.labels.loginPasswordLabel).toBe('Password');
    });

    it('should have both panel closed', function(){
        expect(scope.showLoginForm).not.toBe(true);
        expect(scope.showFacebookForm).not.toBe(true); 
    });
});
