angular.module('bookie.controllers', [])

    /* CATEGORIE CONTROLLER */
    .controller("CategorieCtrl", function($scope, $state, $rootScope) {
      $scope.categorieen = [
        {categorie:'Horror'},
        {categorie:'Fantasy'},
        {categorie:'Thriller'},
        {categorie:'Drama'},
        {categorie:'Biografie'},
        {categorie:'Allerlei'}
        ]

      /*
      * rootScope om door te geven doorheen verschillende controllers
      * Click functie om op te vangen welke categorie er wordt gekozen, deze dan doorgeven naar titel van volgende pagina
      */

      $scope.clicked = function(categorie) {
        $rootScope.categorieTitel = categorie;
      }

      

    })
      /* CATEGORIEDETAIL CONTROLLER */
    .controller("CategoriedetailsCtrl", function($scope, $state, $rootScope) {
      $scope.titel = $rootScope.categorieTitel;
      console.log($rootScope.categorieTitel)
    })