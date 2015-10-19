'use strict';

angular.module('sampleNoCacheApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


