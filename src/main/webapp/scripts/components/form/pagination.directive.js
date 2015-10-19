/* globals $ */
'use strict';

angular.module('sampleNoCacheApp')
    .directive('sampleNoCacheAppPagination', function() {
        return {
            templateUrl: 'scripts/components/form/pagination.html'
        };
    });
