'use strict';

/**
 * @ngdoc function
 * @name howToCussInApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the howToCussInApp
 */
angular.module('howToCussInApp')
  .controller('SelectorController', function ($scope, Translation) {
    $scope.languages = [];

    Translation
      .get()
      .then(function(response) {
        $scope.languages = Object.keys(response.data);
      });
  });
