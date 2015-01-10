'use strict';

angular.module('howToCussInApp')
  .factory('Translation', function($http, $q){
    var filename = 'translations.json',
        service = {},
        translationData;

    // Get translation data
    var deferred = $q.defer();
    $http.get('/' + filename)
      .then(function(data) {
        deferred.resolve(data);
      }, function(error) {
        deferred.error('Can\'t find the file.');
      });
    translationData = deferred.promise;

    service.get = function() {
      return translationData;
    };

    return service;
  });
