describe("Users controller", function() {
   var $controller;
   var UserController;

   beforeEach(angular.mock.module('ui.router'));
   beforeEach(angular.mock.module('user'));

   beforeEach(inject(function(_$controller_) {
       $controller = _$controller_;
       UserController = $controller('UserController', {});
   }));

   it('should be defined', function() {
        expect(UserController).toBeDefined();
   });
});