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

        $urlRouterProvider.otherwise('/categorie');

        $stateProvider
            .state('categorie', {
                url: '/categorie',
                templateUrl: 'templates/categorie.html',
                controller: 'CategorieCtrl'
            })

            .state('categoriedetails', {
                url: '/categoriedetails',
                templateUrl: 'templates/categoriedetails.html',
                controller: 'CategoriedetailsCtrl'
            })
    });