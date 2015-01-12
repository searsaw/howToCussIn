'use strict';

/**
 * @ngdoc function
 * @name howToCussInApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the howToCussInApp
 */
angular.module('howToCussInApp')
  .controller('SelectorController', function ($rootScope, $scope, Translation, $location) {
    $scope.languages = [];

    Translation
      .get()
      .then(function(response) {
        $scope.languages = Object.keys(response.data);
        $scope.currentLanguage = $location.path().slice(1) || $scope.languages[0];
        $scope.update();
      });

    $scope.update = function() {
      $location.replace().path('/' + $scope.currentLanguage);
      $rootScope.$broadcast('languageUpdated', $scope.currentLanguage);
    };
  });
