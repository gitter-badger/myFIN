angular.module('user', [])
    .controller('UserController', function($http) {
        var vm = this;
        vm.formData = {};
        console.log('initiating controller');
        vm.createUser = function() {
            console.log(vm.formData);
            $http.post('/api/newUser', vm.formData)
                .then(function(user) {
                    vm.formData = {};
                    console.log('user ' + user.username * 'created successfully.');
                })
                .catch(function(err) {
                    console.log('Error: ' + JSON.stringify(err));
                });
        };
    });
