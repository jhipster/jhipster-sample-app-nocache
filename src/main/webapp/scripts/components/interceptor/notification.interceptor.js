 'use strict';

angular.module('sampleNoCacheApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-sampleNoCacheApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-sampleNoCacheApp-params')});
                }
                return response;
            }
        };
    });
