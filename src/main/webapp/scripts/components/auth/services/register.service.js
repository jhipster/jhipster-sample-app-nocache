'use strict';

angular.module('samplenocacheApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


