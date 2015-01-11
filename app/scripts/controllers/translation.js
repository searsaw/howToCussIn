'use strict';

angular.module('howToCussInApp')
  .controller('TranslationController', function($scope, Translation) {
    $scope.languageData = {};
    $scope.currentLanguage = 'english';

    Translation
      .get()
      .then(function(response) {
        $scope.languageData = response.data;
      });
  });
