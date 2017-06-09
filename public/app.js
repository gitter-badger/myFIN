angular.module('myFin', ['ui.router', 'user'])
       .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state("newUser", {
                    url: "/newUser",
                    templateUrl: "newUser.html"
                })
});
