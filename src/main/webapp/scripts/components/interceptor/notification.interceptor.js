 'use strict';

angular.module('samplenocacheApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-samplenocacheApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-samplenocacheApp-params')});
                }
                return response;
            },
        };
    });