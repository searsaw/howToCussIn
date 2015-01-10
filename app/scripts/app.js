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
  .module('howToCussInApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
