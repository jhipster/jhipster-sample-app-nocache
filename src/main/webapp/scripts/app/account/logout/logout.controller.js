'use strict';

angular.module('samplenocacheApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
