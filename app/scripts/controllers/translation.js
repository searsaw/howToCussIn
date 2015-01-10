'use strict';

angular.module('howToCussInApp')
  .controller('TranslationController', function($scope, Translation) {
    $scope.languageData = [];

    Translation
      .get()
      .then(function(response) {
        $scope.languageData = response.data;
      });
  });
