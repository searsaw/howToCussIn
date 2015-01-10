'use strict';

angular.module('howToCussInApp')
  .controller('TranslationController', function($scope, Translation) {
    $scope.language_data = [];

    Translation
      .get()
      .then(function(response) {
        $scope.language_data = response.data;
      });
  });
