angular.module('bookie.controllers', [])

    /* CATEGORIE CONTROLLER */
    .controller("CategorieCtrl", function($scope, $state, $rootScope) {
      $scope.categorieen = [
        {categorie:'Horror', cat_id: '1'},
        {categorie:'Fantasy', cat_id: '2'},
        {categorie:'Thriller', cat_id: '3'},
        {categorie:'Drama', cat_id: '4'},
        {categorie:'Biografie', cat_id: '5'},
        {categorie:'Allerlei', cat_id: '6'}
        ]

      $rootScope.auteurs = [
        {auteur: 'Clive Barker', aut_id: '1', cat_id: '1', boeken: ['The Hellbound Heart', 'Cabal', 'Sacramen']},
        {auteur: 'Robert Bloch', aut_id: '2', cat_id: '1', boeken: ['Psycho', 'Firebug', 'The Couch']},
        {auteur: 'William Peter Blatty', aut_id: '3', cat_id: '1', boeken: ['The Exorcist', 'Legion']},
        {auteur: 'Tolkien', aut_id: '4', cat_id: '2', boeken: ['The Fellowship of the Ring', 'The hobbit', 'Beowulf']},
        {auteur: 'J.K Rowling', aut_id: '5', cat_id: '2', boeken: ['Harry potter 1', 'Harry potter 2', 'Harry potter 3', 'Harry potter 4']},
        {auteur: 'Nicci French', aut_id: '6', cat_id: '3', boeken: ['The Red Room', 'Blue Monday']},
        {auteur: 'Jane Austen', aut_id: '6', cat_id: '4', boeken: ['Pride & Prejudice']},
        {auteur: 'Walter Isaacson', aut_id: '7', cat_id: '5', boeken: ['Steve Jobs']},
        {auteur: 'Thomas Hauser', aut_id: '8', cat_id: '5', boeken: ['Muhammad Ali: His Life and Times']},
        {auteur: 'Jeroen Meus', aut_id: '9', cat_id: '6', boeken: ['Dagelijkse Kost 1', 'Dagelijkse Kost 2', 'Dagelijkse Kost 3']},
        {auteur: 'Pascall Naessens', aut_id: '10', cat_id: '6', boeken: ['Puur genieten', 'Puur Pascale']}
      ]

      $rootScope.likes = [
        {lik_id: '11', name: 'Gilles Vercammen', aut_id: '1'},
        {lik_id: '1', name: 'Gilles Vercammen', aut_id: '2'},
        {lik_id: '7', name: 'Gilles Vercammen', aut_id: '5'},
        {lik_id: '9', name: 'Gilles Vercammen', aut_id: '10'},
        {lik_id: '13', name: 'Gilles Vercammen', aut_id: '9'},
        {lik_id: '19', name: 'Gilles Vercammen', aut_id: '3'},
        {lik_id: '23', name: 'Gilles Vercammen', aut_id: '7'},
        {lik_id: '2', name: 'Micky Vangramberen', aut_id: '1'},
        {lik_id: '6', name: 'Micky Vangramberen', aut_id: '5'},
        {lik_id: '10', name: 'Micky Vangramberen', aut_id: '3'},
        {lik_id: '14', name: 'Micky Vangramberen', aut_id: '10'},
        {lik_id: '18', name: 'Micky Vangramberen', aut_id: '4'},
        {lik_id: '22', name: 'Micky Vangramberen', aut_id: '9'},
        {lik_id: '3', name: 'Teddy Roosevelt', aut_id: '2'},
        {lik_id: '15', name: 'Teddy Roosevelt', aut_id: '8'},
        {lik_id: '21', name: 'Teddy Roosevelt', aut_id: '7'},
        {lik_id: '4', name: 'Jan Janssen', aut_id: '3'},
        {lik_id: '16', name: 'Jan Janssen', aut_id: '6'},
        {lik_id: '5', name: 'Jimmy Bookwurm', aut_id: '4'},
        {lik_id: '8', name: 'Jimmy Bookwurm', aut_id: '1'},              
        {lik_id: '12', name: 'Jimmy Bookwurm', aut_id: '5'},
        {lik_id: '17', name: 'Jimmy Bookwurm', aut_id: '10'},
        {lik_id: '20', name: 'Jimmy Bookwurm', aut_id: '7'},
        {lik_id: '24', name: 'Jimmy Bookwurm', aut_id: '6'},  
      ]
        

      /*
      * rootScope om door te geven doorheen verschillende controllers
      * Click functie om op te vangen welke categorie er wordt gekozen, deze dan doorgeven naar titel van volgende pagina
      */

      $scope.clicked = function(categorie) {
        $rootScope.categorieTitel = categorie.categorie;
        $rootScope.categorieId = categorie.cat_id;
      }

      

    })

    /* CATEGORIEDETAIL CONTROLLER */
    .controller("CategoriedetailsCtrl", function($scope, $state, $rootScope) {
      $scope.titel = $rootScope.categorieTitel;
      $scope.specificAuteur = [];

      var auteurLengte = $rootScope.auteurs.length;
      var likesLengte = $rootScope.likes.length;
      var numberOfLikes = 0;


      for(var i = 0; i < auteurLengte; i++){
        if($rootScope.auteurs[i].cat_id === $rootScope.categorieId){
          for(j = 0; j < likesLengte; j++) {
            if($rootScope.auteurs[i].aut_id === $rootScope.likes[j].aut_id){
              numberOfLikes++;
            }
          }
          var obj = {auteur: $rootScope.auteurs[i].auteur, aut_id: $rootScope.auteurs[i].aut_id, likes: numberOfLikes};
          $scope.specificAuteur.push(obj);
          numberOfLikes = 0;
        }
      }
      console.log($scope.specificAuteur);
       $scope.clicked = function(auteur) {
          $rootScope.clickedAuteur = auteur.auteur;
          $rootScope.clickedAut_id = auteur.aut_id;
      }
    })

    /* AUTEURDETAIL CONTROLLER */
    .controller("AuteursdetailsCtrl", function($scope, $state, $rootScope) {
        $scope.clickedAuteur = $rootScope.clickedAuteur;

        var auteurLengte = $rootScope.auteurs.length;

        for(var i = 0; i < auteurLengte; i++){
          if($rootScope.auteurs[i].aut_id === $rootScope.clickedAut_id){
            $scope.boeken = $rootScope.auteurs[i].boeken;
          }
        }

         var likesLengte = $rootScope.likes.length;
         $scope.likesNames = [];
        for(i = 0; i < likesLengte; i++) {
          if($rootScope.clickedAut_id === $rootScope.likes[i].aut_id) {
            if(!$scope.likesNames.includes($rootScope.likes[i].name)){
              $scope.likesNames.push($rootScope.likes[i].name);
            }
          }
        }
        console.log($scope.likesNames);
    })