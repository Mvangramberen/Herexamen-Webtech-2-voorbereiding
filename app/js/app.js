// HIER INJECT JE ALL DEPENDENCIES TUSSEN [ ]
// HIER SPECIFIEER JE DE ROUTING (al gebeurd)

angular.module('bookie', [
    'bookie.controllers',
    'ui.router',
    'ngResource',
    'ngStorage',
    'ngMessages'
])

    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/navigation.html',
                controller: 'AppCtrl'
            })
    });