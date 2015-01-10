'use strict';

/**
 * @ngdoc function
 * @name howToCussInApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the howToCussInApp
 */
angular.module('howToCussInApp')
  .controller('SelectorController', function ($scope, Translation, $log) {
    Translation
      .get()
      .then(function(response) {
        $log.info(response.data);
      });
  });
