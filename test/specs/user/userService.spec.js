describe ('Users factory', function() {
    var Users;

    beforeEach(angular.mock.module('users'));

    beforeEach(inject(function(_Users_) {
        Users = _Users_;
    }));

    it('should return Users object', function() {
        expect(Users).toBeDefined();
    });

    it('it should has .all() method defined',function() {
        expect(Users.all).toBeDefined();
    });

    it('it should has .clear() method defined', function() {
        expect(Users.clear).toBeDefined();
    });

    it('it should has .load() method definend', function() {
       expect(Users.load).toBeDefined();
    });

    describe('all()', function(){
        it('should return zero if empty', function(){
            Users.clear();
            var result = Users.all();


            expect(result).toEqual(0);
        });
    });

});