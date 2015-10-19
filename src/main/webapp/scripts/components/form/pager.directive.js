/* globals $ */
'use strict';

angular.module('sampleNoCacheApp')
    .directive('sampleNoCacheAppPager', function() {
        return {
            templateUrl: 'scripts/components/form/pager.html'
        };
    });
