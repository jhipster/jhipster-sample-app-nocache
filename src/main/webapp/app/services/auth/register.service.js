(function () {
    'use strict';

    angular
        .module('jhipsterNoCacheSampleApplicationApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
