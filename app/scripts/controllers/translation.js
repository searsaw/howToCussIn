'use strict';

angular.module('howToCussInApp')
  .controller('TranslationController', function($scope, Translation) {
    $scope.languageData = {};
    $scope.currentLanguage = '';

    Translation
      .get()
      .then(function(response) {
        $scope.languageData = response.data;
      });

    $scope.$on('languageUpdated', function(event, data) {
      $scope.currentLanguage = data;
    });
  });
