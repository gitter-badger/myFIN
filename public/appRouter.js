var routerApp = angular.module('myFin', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("newUser", {
            url: "/newUser",
            templateUrl: "newUser.html"
        })
});
