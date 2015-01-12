'use strict';

/**
 * @ngdoc overview
 * @name howToCussInApp
 * @description
 * # howToCussInApp
 *
 * Main module of the application.
 */
angular
  .module('howToCussInApp', ['ngRoute'])
  .config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
  });
