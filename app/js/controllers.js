angular.module('bookie.controllers', [])

    /* LOGIN SCHERM CONTROLLER */
    .controller("CategorieCtrl", function($scope, $state) {
      $scope.categorieen = [
        {categorie:'Horror'},
        {categorie:'Fantasy'},
        {categorie:'Thriller'},
        {categorie:'Drama'},
        {categorie:'Biografie'},
        {categorie:'Allerlei'}
        ]

    })
      /* LOGIN SCHERM CONTROLLER */
    .controller("AppCtrl", function($scope, $state) {
    })