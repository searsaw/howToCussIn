'use strict';

/**
 * @ngdoc function
 * @name howToCussInApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the howToCussInApp
 */
angular.module('howToCussInApp')
  .controller('SelectorController', function ($rootScope, $scope, Translation) {
    $scope.languages = [];

    Translation
      .get()
      .then(function(response) {
        $scope.languages = Object.keys(response.data);
        $scope.currentLanguage = $scope.languages[0];
        $scope.update();
      });

    $scope.update = function() {
      $rootScope.$broadcast('languageUpdated', $scope.currentLanguage);
    };
  });
